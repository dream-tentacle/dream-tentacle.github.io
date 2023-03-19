import React from "react";
import "./achievements.css";
import OneAchievement from "./oneAchievement";
import dark from "../images/dark.png";

const achievementList = [
  { name: "黑暗", discription: "我陷入了黑暗", image: dark },
  { name: "告罄", discription: "我没钱了" },
  { name: "平凡即是喜乐", discription: "平凡的生活，我已经满足了" },
  { name: "入狱", discription: "一失足成千古恨" },
  { name: "质变" },
  { name: "一次抗争" },
  { name: "钱不是万能的，但没有钱是万万不能的" },
];

function Achievements(props) {
  let achieved = 0;
  let total = 0;
  const allachievements = achievementList.map((achieve) => {
    total++;
    if (localStorage.getItem(achieve.name)) achieved++;
    return (
      <OneAchievement
        key={`id-${achieve.name}`}
        name={achieve.name}
        image={achieve.image}
        discription={achieve.discription}
      />
    );
  });
  return (
    <div className="Achievements">
      <div className="AchievementTextBox">{allachievements}</div>
      <p style={{ textAlign: "center" }}>{achieved + " / " + total}</p>
      <button
        onClick={() => props.setAchievementsBox(false)}
        className="AchievementsButton"
        style={{ display: "block", margin: "10px auto" }}
      >
        关闭成就
      </button>
    </div>
  );
}
export default Achievements;
