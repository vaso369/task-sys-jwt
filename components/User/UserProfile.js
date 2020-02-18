import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";
import AvatarPlaceholder from "../../assets/avatar-placeholder.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Logout from "../Logout/Logout";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Button from "@material-ui/core/Button";
import Error404 from "../Errors/404";
import BossInfo from "../BossInfo/BossInfo";
import { url, picturePath } from "../../consts/consts";
import $ from "jquery";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "39vh"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "lightblue"
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "0px auto"
  },
  fileUpload: {
    display: "none",
    cursor: "pointer"
  },
  iconAdd: {
    cursor: "pointer"
  },
  cardActions: {
    justifyContent: "space-between"
  },
  iconEdit: {
    color: "blue"
  },
  editText: {
    color: "grey",
    fontSize: "0.9rem"
  },
  btnUpload: {
    display: "none",
    position: "absolute",
    top: "1%",
    right: "0.5%",
    maxHeight: "4%"
  }
}));

export default function UserProfile() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const state = useStateGlobal();
  const dispatch = useDispatchState();

  useEffect(() => {
    state;
  });

  console.log(state);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const editUserInfoHandle = () => {
    dispatch({
      type: "EDIT_INFO"
    });
  };
  const hideIcon = () => {
    $("#iconBtn").hide();
    $("#btnUpload").show();
  };
  const uploadPicture = () => {
    const picturePath = document.getElementById("file-upload").value;
    console.log(picturePath);
    if (picturePath === "") {
      $("#iconBtn").show();
      $("#btnUpload").hide();
    } else {
      const name = document.getElementById("file-upload").files[0].name;
      const form_data = new FormData();
      const ext = name
        .split(".")
        .pop()
        .toLowerCase();
      // if (jQuery.inArray(ext, ["gif", "png", "jpg", "jpeg"]) == -1) {
      //   alert("Invalid Image File");
      // }
      // const oFReader = new FileReader();
      // oFReader.readAsDataURL(document.getElementById("file-upload").files[0]);
      const f = document.getElementById("file-upload").files[0];
      const fsize = f.size || f.fileSize;
      if (fsize > 2000000) {
        alert("Image File Size is very big");
      } else {
        console.log(document.getElementById("file-upload").files[0]);
        form_data.append(
          "file",
          document.getElementById("file-upload").files[0]
        );
        form_data.append("idEmployee", Number(state.user.id));
        console.log(form_data);
        console.log(localStorage.getItem("token"));

        $.ajax({
          url: url + "?page=upload_photo",
          method: "POST",
          data: form_data,
//           headers: {
//             Authorization: "JWT" + " " + localStorage.getItem("token")
//           },
          dataType: "json",
          cache: false,
          contentType: false,
          processData: false,
          success: function(data) {
            console.log(data);
            // if (data.idBoss === "0") {
            //   data.code = "201";
            // } else {
            //   data.code = "200";
            // }
            dispatch({
              type: "SET_LOGIN",
              data: data
            });
            $("#iconBtn").show();
            $("#btnUpload").hide();
            dispatch({
              type: "SET_SOURCE",
              data:
                "http://localhost/task-management-sys-v1/backend/app/" +
                data.imagePath
            });
          },
          error: function(xhr) {
            console.log(xhr);
          }
        });
      }
    }
  };
  const userProfile =
    state.user !== null ? (
      <div
        style={{
          height: "100vh",
          maxWidth: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Card className={classes.card} style={{ height: "60vh" }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {state.user.emp_first_name.charAt(0) || "dsfsdfs"}
              </Avatar>
            }
            action={
              <div>
                <IconButton
                  id="iconBtn"
                  onClick={hideIcon}
                  aria-label="Add photo"
                  className={classes.iconBtn}
                >
                  <label for="file-upload">
                    <AddAPhotoIcon className={classes.iconAdd} />
                  </label>

                  <input
                    id="file-upload"
                    className={classes.fileUpload}
                    type="file"
                    name="file"
                  />
                </IconButton>
                <Button
                  id="btnUpload"
                  className={classes.btnUpload}
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={uploadPicture}
                >
                  UPLOAD
                </Button>
              </div>
            }
            title={state.user.emp_first_name + " " + state.user.emp_last_name}
            subheader={state.user.name}
          />

          <Avatar
            alt={state.user.emp_first_name + " " + state.user.emp_last_name}
            src={
              state.user.imagePath !== ""
                ? "https://api-task-management.000webhostapp.com/backend/app/" +
                  state.user.imagePath
                : state.source
            }
            className={classes.large}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ margin: "3% 0" }}
            >
              <strong>Username:</strong> {state.user.username}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Email:</strong> {state.user.emp_email}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button onClick={editUserInfoHandle}>
              <BorderColorIcon className={classes.iconEdit} />
              &nbsp;<p className={classes.editText}>Edit your profile</p>
            </Button>
            <Logout />
          </CardActions>
        </Card>

        {state.loggedIn === true && state.user.code === "200" ? (
          <Card className={classes.card}>
            <BossInfo />{" "}
          </Card>
        ) : null}
      </div>
    ) : (
      <Error404 />
    );

  return userProfile;
}
