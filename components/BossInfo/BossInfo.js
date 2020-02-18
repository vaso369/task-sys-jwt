import React, { useState } from "react";
import SendMessage from "../SendMessage/SendMessage";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";
import AvatarPlaceholder from "../../assets/avatar-placeholder.png";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Logout from "../Logout/Logout";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Button from "@material-ui/core/Button";
import Error404 from "../Errors/404";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import { url } from "../../consts/consts";
import $ from "jquery";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    padding: "2%"
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
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: "3% 0 0 3%"
  },
  cardActions: {
    justifyContent: "space-between"
  },
  sectorHeading: {
    textAlign: "center"
  },
  bossEmail: {
    margin: "3% 0 0 6%"
  },
  btnMail: {
    float: "right",
    margin: "20% 1% 0 0"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  textBox: {
    width: "100%"
  },
  btnSend: {
    color: "grey",
    backgroundColor: "white !important",
    border: "1px solid grey",
    float: "right"
  }
}));

export default function UserProfile() {
  const classes = useStyles();
  const state = useStateGlobal();
  const dispatch = useDispatchState();

  console.log(state);
  const userProfile =
    state.user !== null ? (
      <Card className={classes.card}>
        <Typography className={classes.sectorHeading}>
          <strong>{state.user.name}</strong>
        </Typography>
        <CardHeader
          avatar={
            <Avatar
              alt={state.user.boss_first_name + " " + state.user.boss_last_name}
              src={
                state.user.imagePath !== ""
                  ? "https://api-task-management.000webhostapp.com/backend/app/" +
                    state.user.boss_imagePath
                  : state.source
              }
              className={classes.large}
            />
          }
          title={state.user.boss_first_name + " " + state.user.boss_last_name}
          subheader="Team leader"
        />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.bossEmail}
        >
          <strong>Email:</strong> {state.user.boss_email}
        </Typography>
        <SendMessage props={state.user} />
      </Card>
    ) : (
      <Error404 />
    );

  return userProfile;
}
