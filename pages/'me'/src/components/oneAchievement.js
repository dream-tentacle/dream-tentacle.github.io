import React from "react";

function OneAchievement(props) {
  const achieved = localStorage.getItem(props.name);
  return (
    <div className={achieved ? "gainedAchievement" : "notGainedAchievement"}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image ? (
          <img
            className="achievementPicture"
            src={props.image}
            alt="成就图片"
          ></img>
        ) : (
          <div className="achievementPicture"></div>
        )}
        <p
          style={{
            alignSelf: "center",
            maxWidth: "40%",
            textAlign: "center",
          }}
        >
          {props.name + (achieved ? "——" + props.discription : "")}
        </p>
        {achieved ? (
          <p style={{ alignSelf: "center", color: "green" }}>已达成</p>
        ) : (
          <p style={{ alignSelf: "center", color: "gray" }}>未达成</p>
        )}
      </div>
      <br />
    </div>
  );
}
export default OneAchievement;
