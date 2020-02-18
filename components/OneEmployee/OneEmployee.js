import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    cursor: "pointer",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const OneEmployee = ({ props }) => {
  const classes = useStyles();
  const state = useStateGlobal();
  const dispatch = useDispatchState();
  const showEmploye = (id) => {
    console.log(id);
    const employee = state.team.filter((el) => el.id === id);
    console.log(employee);
    dispatch({
      type: "ABOUT_EMPLOYEE",
      data: employee
    });
  };
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start" onClick={() => showEmploye(props.id)}>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src={
              "https://api-task-management.000webhostapp.com/backend/app/" +
              props.imagePath
            }
          />
        </ListItemAvatar>
        <ListItemText
          primary={props.first_name + " " + props.last_name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.email}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default OneEmployee;
