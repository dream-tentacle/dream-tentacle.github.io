import React from "react";
import "./achievements.css";
import OneAchievement from "./oneAchievement";
import dark from "../images/dark.png";
import bowl from "../images/bowl.png";
import prison from "../images/prison.png";
import normalLifePicture from "../images/normalLifePicture.png";
import eggPicture from "../images/eggPicture.png";
import singerPicture from "../images/singerPicture.png";
import bribePicture from "../images/bribePicture.png";
import wolfPicture from "../images/wolfPicture.png";
import crystalBallPicture from "../images/crystalBallPicture.png";
import knifePicture from "../images/knifePicture.png";
import knife2Picture from "../images/knife2Picture.png";
import occultismPicture from "../images/occultismPicture.png";
import wandPicture from "../images/wandPicture.png";
import wolf2Picture from "../images/wolf2Picture.png";
import change3Picture from "../images/change3Picture.png";
import change2Picture from "../images/change2Picture.png";
import change1Picture from "../images/change1Picture.png";
import harbourPicture from "../images/harbourPicture.png";

const achievementList = [
  { name: "不幸", discription: "即刻重开，好耶", image: eggPicture },
  { name: "黑暗", discription: "沉沦黑暗之中", image: dark },
  { name: "告罄", discription: "花光了所有的钱", image: bowl },
  {
    name: "平凡即是喜乐",
    discription: "我满足于平凡的生活",
    image: normalLifePicture,
  },
  { name: "真理", discription: "我逐渐理解一切", image: occultismPicture },
  { name: "一首童谣", discription: "击败童谣中的诡异歌手", image: singerPicture },
  { name: "入狱", discription: "一失足成千古恨", image: prison },
  {
    name: "钱不是万能的，但没有钱是万万不能的",
    discription: "花点钱贿赂治安官",
    image: bribePicture,
  },
  {
    name: "质变",
    discription: "我的实力发生了质变。（属性总和达到20点）",
    image: change1Picture,
  },
  { name: "一次抗争", discription: "击杀治安官", image: wolfPicture },
  { name: "不屈", discription: "击杀警长", image: wolf2Picture },

  { name: "实力", discription: "击败一个至少3级的敌人", image: knifePicture },
  { name: "奇诡！", discription: "获得一件诡物", image: crystalBallPicture },
  {
    name: "升华",
    discription: "我的本质已得到升华。（属性总和达到40点）",
    image: change2Picture,
  },
  { name: "无可匹敌", discription: "击败一个至少4级的敌人", image: knife2Picture },
  {
    name: "异化",
    discription: "我几乎不再是人类。（属性总和达到60点）",
    image: change3Picture,
  },
  { name: "支配", discription: "击败一个至少5级的敌人", image: wandPicture },
  { name: "港湾", discription: "达成“港湾”胜利结局", image: harbourPicture },
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
      <p style={{ textAlign: "center", fontFamily: "fantasy" }}>
        {achieved + " / " + total}
      </p>
      <button
        onClick={() => props.setAchievementsBox(false)}
        className="AchievementsButton"
        style={{ display: "block", margin: "10px auto" }}
      >
        关闭
      </button>
      <span>ver: 0.2.3</span>
    </div>
  );
}
export default Achievements;
