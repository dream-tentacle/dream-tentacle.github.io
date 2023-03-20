import React from "react";
import "./achievements.css";
import OneAchievement from "./oneAchievement";
import dark from "../images/dark.png";
import bowl from "../images/bowl.png";
import prison from "../images/prison.jpg";

const achievementList = [
  { name: "不幸", discription: "即刻重开，好耶" },
  { name: "黑暗", discription: "沉沦黑暗之中", image: dark },
  { name: "告罄", discription: "花光了所有的钱", image: bowl },
  { name: "平凡即是喜乐", discription: "我满足于平凡的生活" },
  { name: "入狱", discription: "一失足成千古恨", image: prison },
  {
    name: "钱不是万能的，但没有钱是万万不能的",
    discription: "花点钱贿赂治安官",
  },
  { name: "质变", discription: "属性总和达到20点" },
  { name: "一次抗争", discription: "击杀治安官" },

  { name: "力量", discription: "击败一个至少3级的敌人" },
  { name: "升华", discription: "属性总和达到40点" },
  { name: "无可匹敌", discription: "击败一个至少4级的敌人" },
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
