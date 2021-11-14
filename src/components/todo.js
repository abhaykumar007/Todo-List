import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteFun } from "./action/index";
export default function Todos() {
  const todoList = useSelector((state) => state.reducerFun.todo);
  // console.log(todoList);
  const dispatch = useDispatch();

  return (
    <div className="todo-container">
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <ol className="todo-ol">
            <h2>{todo}</h2>
            <button onClick={() => dispatch(deleteFun(todo))}>X</button>
          </ol>
        ))
      ) : (
        <h5>"Please Enter todos"</h5>
      )}
    </div>
  );
}
