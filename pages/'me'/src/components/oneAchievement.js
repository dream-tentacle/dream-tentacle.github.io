import React from "react";

function OneAchievement(props) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="achievementPicture" style={{}}></div>
        <p
          style={{
            alignSelf: "center",
            maxWidth: "40%",
            textAlign: "center",
          }}
        >
          {props.name}
        </p>
        <p
          style={{
            alignSelf: "center",
          }}
        >
          {localStorage.getItem(props.name) ? "已达成" : "未达成"}
        </p>
      </div>
      <br />
    </div>
  );
}
export default OneAchievement;
