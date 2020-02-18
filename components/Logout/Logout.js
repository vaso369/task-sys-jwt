import React from "react";
import Button from "@material-ui/core/Button";
import { url, urlRedirect } from "../../consts/consts";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";
import $ from "jquery";
import Router from "next/router";

const Logout = () => {
  const globalState = useStateGlobal();
  const dispatch = useDispatchState();

  const logoutUser = () => {
   localStorage.removeItem("token");
    dispatch({
      type: "SET_LOGOUT"
    });
    Router.push("/");

    // $.ajax({
    //   url: url + "?page=logout",
    //   headers: {
    //     Authorization: "JWT" + " " + localStorage.getItem("token")
    //   },
    //   method: "POST",
    //   dataType: "json",
    //   data: {
    //     action: "logout"
    //   },
    //   success: function(data) {
    //     console.log(data);
    //     // setLoggedIn(true);
    //     //console.log(loggedIn);
    //     // window.location.href = `${urlRedirect}`;
    //     dispatch({
    //       type: "SET_LOGOUT"
    //     });
    //     Router.push("/");
    //   },
    //   error: function(xhr) {
    //     console.log(xhr);
    //     //  alert("You are not registered!");
    //   }
    // });
  };

  return (
    <React.Fragment>
      <Button
        id="logout"
        variant="contained"
        color="primary"
        onClick={logoutUser}
      >
        LOGOUT
      </Button>
    </React.Fragment>
  );
};

export default Logout;
