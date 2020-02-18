import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import { url } from "../../consts/consts";
import $ from "jquery";
import { makeStyles } from "@material-ui/core/styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: "50%",
    left: "50%",
    transform: `translate(-${top}%, -${left}%)`
  };
}
const useStyles = makeStyles((theme) => ({
  btnMail: {
    float: "right",
    margin: "20% 1% 0 0"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "3px"
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

const SendMessage = ({ props, employee }) => {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  console.log(props, employee);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sendMssg = () => {
    const message = document.getElementById("tbMess").value;
    const idEmployee = Number(props.code === "200" ? props.id : employee.id);
    const idBoss = Number(props.code === "200" ? props.idBoss : props.id);
    const forSend = {
      idEmployee,
      idBoss,
      message
    };
    console.log(forSend);
    $.ajax({
      url: url + "?page=send_message",
//       headers: {
//         Authorization: "JWT" + " " + localStorage.getItem("token")
//       },
      method: "POST",
      dataType: "json",
      data: forSend,
      success: function(data) {
        alert(`${data.message}`);
      },
      error: function(xhr) {
        console.log(xhr);
      }
    });
  };
  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        variant="outlined"
        color="primary"
        className={classes.btnMail}
      >
        <MailOutlineIcon> </MailOutlineIcon>&nbsp; SEND MESSAGE
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Your message</h2>
          <p id="simple-modal-description">
            Send to:{" "}
            {props.code === "200"
              ? props.boss_first_name + " " + props.boss_last_name
              : employee.first_name + " " + employee.last_name}
          </p>
          <TextField
            id="tbMess"
            className={classes.textBox}
            type="text"
            label="MESSAGE"
            defaultValue=""
            helperText=" "
            variant="outlined"
            multiline="true"
            rows="4"
          />
          <Button
            id="btnSendMsg"
            onClick={sendMssg}
            className={classes.btnSend}
            variant="outlined"
          >
            Send&nbsp;<SendIcon></SendIcon>
          </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default SendMessage;
