import React from "react";

function Log(props) {
  return (
    <p className={props.className}>
      【{props.age}岁】
      {props.logText}
    </p>
  );
}
export default Log;
