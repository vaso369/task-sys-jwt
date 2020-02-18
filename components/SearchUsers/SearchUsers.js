import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";
import $ from "jquery";
import { url, urlRedirect } from "../../consts/consts";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "none"
  },
  inputRoot: {
    width: "50%",
    border: "1px solid white !important",
    borderRadius: "3px"
  },
  cssLabel: {
    color: "white"
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": { display: "none" }
  },
  cssFocused: {
    color: "white",
    display: "none"
  },
  option: {
    backgroundColor: "black",
    margin: 0,
    padding: 0
  },
  small: {
    marginRight: "8px"
  },
  divItem: {
    display: "flex",
    alignItems: "center"
  },
  divSearch: {
    display: "flex",
    alignItems: "center"
  },
  iconSearch: {
    fontSize: "3em",
    marginRight: "1%",
    marginLeft: "-2%",
    cursor: "pointer"
  }
}));

const SearchUsers = () => {
  const state = useStateGlobal();
  const dispatch = useDispatchState();
  const classes = useStyles();

  useEffect(() => {
    $.ajax({
      url: url + "?page=get_team",
//       headers: {
//         Authorization: "JWT" + " " + localStorage.getItem("token")
//       },
      method: "GET",
      dataType: "json",
      data: {
        idBoss: Number(state.user.id)
      },
      success: function(data) {
        console.log(data);
        dispatch({
          type: "SET_TEAM",
          data: data
        });
      },
      error: function(xhr) {
        console.log(xhr);
      }
    });
  }, []);
  const showEmployee = (id) => {
    console.log(id);
    const employee = state.team.filter((el) => el.id === id);
    console.log(employee);
    dispatch({
      type: "ABOUT_EMPLOYEE",
      data: employee
    });
  };
  return (
    <div className={classes.divSearch}>
      <SearchOutlinedIcon className={classes.iconSearch}></SearchOutlinedIcon>
      <Autocomplete
        className={classes.root}
        id="search-users"
        options={state.team}
        getOptionLabel={(option) => option.first_name + " " + option.last_name}
        renderOption={(option, { selected }) => (
          <div
            className={classes.divItem}
            onClick={() => showEmployee(option.id)}
          >
            <Avatar
              alt={option.first_name + " " + option.last_name}
              src={`https://api-task-management.000webhostapp.com/backend/app/${option.imagePath}`}
              className={classes.small}
            />
            {option.first_name + " " + option.last_name}
          </div>
        )}
        style={{ width: 500, border: "none" }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            className={classes.inputRoot}
            label=""
            placeholder=""
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
          />
        )}
      />
      {/* <style jsx>{`
        .MuiOutlinedInput-notchedOutline {
          display: none;
        }
      `}</style> */}
    </div>
  );
};
export default SearchUsers;
