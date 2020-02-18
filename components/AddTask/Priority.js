import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Priority() {
  const classes = useStyles();
  const dispatch = useDispatchState();

  const handleChange = (event) => {
    console.log(typeof event.target.value);
    dispatch({
      type: "SET_PRIORITY",
      data: Number(event.target.value)
    });
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">PRIORITY</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="ddlPriority"
          onChange={handleChange}
        >
          <MenuItem value="0">
            <em>Choose</em>
          </MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
