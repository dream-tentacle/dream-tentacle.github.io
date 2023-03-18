import React from "react";

function Ability(props) {
  return (
    <div className="Ability">
      <h4>你的属性:</h4>
      <ul>
        <li className="Cornflowerblue">洞察(目): {props.observe}</li>
        <li className="Tomato">抵抗(心): {props.defend}</li>
        <li className="Lightslategray">技艺(珠): {props.technique}</li>
        <li className="Blue">欲望(水): {props.desire}</li>
      </ul>
    </div>
  );
}
export default Ability;
