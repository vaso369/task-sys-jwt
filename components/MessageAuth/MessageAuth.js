import React from "react";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MessageAuthStyle";

const MessageAuth = () => {
  const classes = useStyles();

  return (
    <div id="divMsg" className={classes.divMsg}>
      <h2 className={classes.h2}>Tech Support</h2>
      <TextField
        id="tbFirstName"
        label="FULL NAME"
        defaultValue=""
        className={classes.tbFirst}
        helperText=""
        variant="outlined"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          },
          inputMode: "numeric"
        }}
      />
      <br></br>
      <TextField
        id="tbMsg"
        color="white"
        label="MESSAGE"
        className={classes.tbMsg}
        defaultValue=""
        helperText=""
        variant="outlined"
        margin="normal"
        rows="4"
        size="large"
        multiline="true"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          },
          inputMode: "numeric"
        }}
      />
      <br></br>
      <Button id="btnSendMsg" className={classes.btnSend} variant="outlined">
        Send&nbsp;<SendIcon></SendIcon>
      </Button>
    </div>
  );
};
export default MessageAuth;
