import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function DatePickers() {
  const classes = useStyles();

  const date = new Date();
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();
  const dateYear = date.getFullYear();
  const format = `asas`;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="tbDate"
        label="DEADLINE"
        type="date"
        defaultValue={format}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
