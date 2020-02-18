import React, { useEffect } from "react";
import $ from "jquery";
import { url, urlRedirect } from "../../consts/consts";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";
import Task from "./Task";

const AllTasks = () => {
  const state = useStateGlobal();
  const dispatch = useDispatchState();
  useEffect(() => {
    $.ajax({
      url: url + "?page=tasks",
      headers: {
        Authorization: "JWT" + " " + localStorage.getItem("token")
      },
      method: "POST",
      dataType: "json",
      data: {
        idEmployee: Number(state.user.id),
        code: Number(state.user.code)
      },
      success: function(data) {
        dispatch({
          type: "SET_TASKS",
          data: data
        });
      },
      error: function(xhr) {
        console.log(xhr);
        if (xhr.responseJSON) {
          alert(xhr.responseJSON.message + " " + xhr.responseJSON.error);
        }
      }
    });
  }, []);

  return (
    <div>
      {state.allTasksData.map((el) => (
        <Task key={el.idTask} data={el} />
      ))}
    </div>
  );
};

export default AllTasks;
