import "./App.css";
import Todos from "./components/todo.js";
import { useDispatch } from "react-redux";
import { addFun } from "./components/action/index";
import { useState } from "react";

function App() {
  const [inputValue, setIpValue] = useState("");

  function handelDispatch() {
    setIpValue("");
    if (inputValue !== "") {
      dispatch(addFun(inputValue));
    } else {
      alert("input is empty");
    }
  }
  // console.log(inputValue);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <h1>TODO-LIST</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Enter ToDo"
            value={inputValue}
            onChange={(e) => setIpValue(e.target.value)}
          />
          <button className="btn" onClick={handelDispatch}>
            Add
          </button>
        </div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
