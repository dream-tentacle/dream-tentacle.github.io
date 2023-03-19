import React from "react";
import "./oneAchievement.css";

function OneAchievement(props) {
  const achieved = localStorage.getItem(props.name);
  return (
    <div
      id="oneAchievement"
      className={achieved ? "gainedAchievement" : "notGainedAchievement"}
    >
      {props.image ? (
        <img
          className="achievementPicture"
          src={props.image}
          alt="成就图片"
        ></img>
      ) : (
        <div className="achievementPicture" />
      )}
      <div className="centerTexts">
        <p className="nameText">{props.name}</p>
        <p className="discriptionText">{props.discription}</p>
      </div>

      {achieved ? (
        <p style={{ color: "green", fontWeight: "bold", paddingRight: "8px" }}>
          已达成
        </p>
      ) : (
        <p style={{ color: "gray", paddingRight: "8px" }}>未达成</p>
      )}
    </div>
  );
}
export default OneAchievement;
