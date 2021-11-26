import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteFun } from "./action/index";
export default function Todos() {
  const todoList = useSelector((state) => state.reducerFun.todo);
  const [flag, setflag] = useState(true);
  // console.log(todoList);
  const dispatch = useDispatch();

  function editFun() {
    setflag((prevState) => !prevState);
  }
  return (
    <div className="todo-container">
      {todoList.length > 0 ? (
        <div>
          <div className="edit">
            <h5>In case You want to edit the todo</h5>
            <button onClick={() => editFun()} onDoubleClick={() => editFun()}>
              {flag ? (
                <i class="fas fa-pencil-alt"></i>
              ) : (
                <i class="fas fa-check"></i>
              )}
            </button>
          </div>
          {/* <div className="todos"></div> */}
          {todoList.map((todo, i) => (
            <ol className="todo-ol">
              {/* <h2>{todo}</h2> */}
              <input key={i} placeholder={todo} disabled={flag} />

              <button
                className="delete"
                onClick={() => dispatch(deleteFun(todo))}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </ol>
          ))}
        </div>
      ) : (
        <h5>"Please Enter todos"</h5>
      )}
    </div>
  );
}
