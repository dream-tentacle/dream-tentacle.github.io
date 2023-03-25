import React from "react";

function Ability(props) {
  return (
    <div className="Ability">
      <h4>你的性相:</h4>
      <span className="Cornflowerblue">目: {props.observe}</span>
      <span className="Tomato">心: {props.defend}</span>
      <br></br>
      <br></br>
      <span className="Lightslategray">珠: {props.technique}</span>
      <span className="Blue">水: {props.desire}</span>
    </div>
  );
}
export default Ability;
