import React from "react";
import "./achievements.css";
import OneAchievement from "./oneAchievement";

function Achievements(props) {
  return (
    <div className="Achievements">
      <OneAchievement name="黑暗" />

      <OneAchievement name="告罄" />

      <OneAchievement name="平凡即是喜乐" />

      <OneAchievement name="入狱" />

      <OneAchievement name="质变" />

      <OneAchievement name="一次抗争" />

      <OneAchievement name="钱不是万能的，但没有钱是万万不能的" />

      <button
        onClick={() => props.setAchievementsBox(false)}
        className="AchievementsButton"
      >
        关闭成就
      </button>
    </div>
  );
}
export default Achievements;
