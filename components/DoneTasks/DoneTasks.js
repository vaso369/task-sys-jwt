import React, { useEffect } from "react";
import $ from "jquery";
import { url, urlRedirect } from "../../consts/consts";
import { useStateGlobal, useDispatchState } from "../../src/GlobalState";
import Task from "../AllTasks/Task";

const DoneTasks = () => {
  const state = useStateGlobal();
  const dispatch = useDispatchState();
  useEffect(() => {
    $.ajax({
      url: url + "?page=done_tasks",
//       headers: {
//         Authorization: "JWT" + " " + localStorage.getItem("token")
//       },
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

export default DoneTasks;
