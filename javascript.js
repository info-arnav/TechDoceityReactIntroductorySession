import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./client/classComponent";
import Home from "./client/home";

const App = (props) => {
  return (
    <div id="main">
      <Home></Home>
      <ClassComponent></ClassComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
