import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Log from "./components/log";
import issues from "./source/issues";
import Ability from "./components/ability";
import Achievements from "./components/achievements";
import clockPicture from "./images/clockPicture.png";
import moneyPicture from "./images/moneyPicture.png";
import "./App.css";

//hobbies
const write = "写作",
  sport = "运动";

//career
const writer = "作家",
  athlete = "运动员";

//物品
// eslint-disable-next-line
const treasureID = {
  588: "5级目之诡物",
  589: "5级心之诡物",
  590: "5级珠之诡物",
  591: "5级水之诡物",
  593: "4级目之诡物",
  594: "4级心之诡物",
  595: "4级珠之诡物",
  596: "4级水之诡物",
  597: "3级目之诡物",
  598: "3级心之诡物",
  599: "3级珠之诡物",
  600: "3级水之诡物",
};

let actionPerYear = 10;
let moneyPerYear = 4;

const backgroundColors = [
  "#F8F9F9",
  "#F2F4F4",
  "#E5E8E8",
  "#CCD1D1",
  "#B2BABB",
  "#99A3A4",
  "#7F8C8D",
  "#707B7C",
  "#616A6B",
  "#515A5A",
  "#424949",
];

const maxLogs = 1000;

function App() {
  //States:
  const [age, setAge] = useState(0);
  const [money, setMoney] = useState(4);
  const [hobby, setHobby] = useState([]);
  const [career, setCareer] = useState("无");
  const [time, setTime] = useState(actionPerYear);
  const [reputation, setReputation] = useState(0);
  const [occultist, setOccultist] = useState(false);
  const [dark, setDark] = useState(0);
  const [insertIssueID, setInsertIssueID] = useState(0);
  const [storeState, setStoreState] = useState(0);
  const [usedIssue, setUsedIssue] = useState([]);
  const [sheriff, setSheriff] = useState(0);
  const [achievementsBox, setAchievementsBox] = useState(false);
  const [treasure, setTreasure] = useState([]);
  const [usingTreasure, setUsingTreasure] = useState(0);
  const [treasureListOpen, setTreasureListOpen] = useState(false);
  const [logList, setLogList] = useState([
    {
      stateID: 0,
      logText: issues[0].logText,
      nextStates: issues[0].nextStates,
      id: `log-${nanoid()}`,
      age: 0,
    },
  ]);
  const [ability, setAbility] = useState({
    observe: 1,
    defend: 1,
    technique: 1,
    desire: 1,
  });

  //functions:
  function originate() {
    window.location.reload();
  }
  function addAbility(observe, defend, technique, desire) {
    if (observe || defend || technique || desire)
      setAbility({
        observe: ability.observe + observe,
        defend: ability.defend + defend,
        technique: ability.technique + technique,
        desire: ability.desire + desire,
      });
  }
  function specialIssueConsequence(newIssue) {
    let a = 0,
      b = 0,
      c = 0,
      d = 0;
    //能力与名声变动
    if ("observe" in newIssue) a = newIssue.observe;
    if ("defend" in newIssue) b = newIssue.defend;
    if ("technique" in newIssue) c = newIssue.technique;
    if ("desire" in newIssue) d = newIssue.desire;
    addAbility(a, b, c, d);
    if ("reputation" in newIssue) setReputation(reputation + newIssue.reputation);
    if ("age" in newIssue) setAge(newIssue.age);
    //三种失败途径
    if ("dark" in newIssue) setDark((x) => x + newIssue.dark);
    if ("money" in newIssue) setMoney((x) => x + newIssue.money);
    if ("time" in newIssue) setTime((x) => x + newIssue.time);
    //一些特殊事件结果
    if (newIssue.stateID === 99) setHobby([...hobby, sport]);
    if (newIssue.stateID === 100) setHobby([...hobby, write]);
    if (newIssue.stateID === 151) setCareer(writer);
    if (newIssue.stateID === 152) setCareer(athlete);
    if (newIssue.stateID === 360) setOccultist(true);

    //成就
    if (newIssue.stateID === 2) localStorage.setItem("告罄", true);
    if (newIssue.stateID === 6) localStorage.setItem("黑暗", true);
    if (newIssue.stateID === 7) localStorage.setItem("不幸", true);
    if (newIssue.stateID === 354) localStorage.setItem("平凡即是喜乐", true);
    if (newIssue.stateID === 501) localStorage.setItem("入狱", true);
    if (newIssue.stateID === 510)
      localStorage.setItem("钱不是万能的，但没有钱是万万不能的", true);
    if (newIssue.stateID === 511) localStorage.setItem("一次抗争", true);
    if (newIssue.stateID === 521) localStorage.setItem("不屈", true);
    if (newIssue.stateID === 257) localStorage.setItem("真理", true);
    if (newIssue.stateID === 731) localStorage.setItem("港湾", true);
  }
  function addLog(newIssue) {
    if (
      "hidden" in newIssue ||
      (!occultist && newIssue.stateID <= 198 && newIssue.stateID >= 191)
    ) {
      if (newIssue.stateID === 305) {
        if (hobby.some((onehobby) => onehobby === write)) addLog(issues[306]);
        else addLog(issues[307]);
      } else if (newIssue.stateID === 311) {
        if (hobby.some((onehobby) => onehobby === sport)) addLog(issues[313]);
        else addLog(issues[312]);
      } else nextLog(newIssue);
    } else if (newIssue.stateID === 260 && usedIssue.some((ele) => ele === 260))
      nextLog(issues[241]); //假如打过了歌手
    else if (newIssue.stateID === 269 && usedIssue.some((ele) => ele === 269))
      nextLog(issues[241]); //假如逃离了邪教派对
    else {
      setLogList([
        {
          stateID: newIssue.stateID,
          logText: newIssue.logText,
          nextStates: newIssue.nextStates,
          id: `log-${nanoid()}`,
          age: "age" in newIssue ? newIssue.age : age,
          className: "className" in newIssue ? newIssue.className : "",
        },
        ...logList,
      ]);
      specialIssueConsequence(newIssue);
    }
  }
  function specialIssue(nowState) {
    if (nowState.stateID === 211 && !occultist) {
      let poss = Math.random();
      if (poss <= 0.6) {
        addLog(issues[351]);
        return true;
      }
    }
    if (nowState.stateID === 201) {
      let poss = Math.random();
      addLog(issues[362 + Math.round(poss * 113)]);
      return true;
    }
  }
  function nextLog(nowState) {
    let poss = Math.random();
    if (specialIssue(nowState)) return;
    if (insertIssueID !== 0) {
      const tmp = insertIssueID;
      setStoreState(nowState);
      setInsertIssueID(0);
      addLog(issues[tmp]);
      console.log("inserted issue: ");
      console.log(nowState);
      return;
    }
    if ("insertEnd" in issues[nowState.stateID]) {
      console.log("jump from issue:");
      console.log(nowState);
      console.log("jump to issue: ");
      console.log(storeState);
      nextLog(storeState);
      return;
    }
    let newIssue;
    for (let i = 0; i < nowState.nextStates.length; i++) {
      const possibleIssue = nowState.nextStates[i];
      if (poss <= possibleIssue.possibility) {
        newIssue = issues[possibleIssue.stateID];
        addLog(newIssue);
        break;
      } else poss -= possibleIssue.possibility;
    }
  }
  function battleResult(enemy) {
    if (enemy.level === 4) {
      if (enemy.observe >= 10 && usingTreasure !== 599 && usingTreasure !== 595)
        return -1;
      if (enemy.technique >= 10 && usingTreasure !== 597 && usingTreasure !== 593)
        return -1;
      if (enemy.defend >= 10 && usingTreasure !== 600 && usingTreasure !== 596)
        return -1;
      if (enemy.desire >= 10 && usingTreasure !== 598 && usingTreasure !== 594)
        return -1;
    }
    if (enemy.level === 5) {
      if (enemy.observe >= 20 && usingTreasure !== 590 && usingTreasure !== 595)
        return -1;
      if (enemy.technique >= 20 && usingTreasure !== 588 && usingTreasure !== 593)
        return -1;
      if (enemy.defend >= 20 && usingTreasure !== 591 && usingTreasure !== 596)
        return -1;
      if (enemy.desire >= 20 && usingTreasure !== 589 && usingTreasure !== 594)
        return -1;
    }
    const yourSum =
      ability.observe + ability.technique + ability.defend + ability.desire;
    const enemySum = enemy.observe + enemy.technique + enemy.defend + enemy.desire;
    if (ability.observe > enemy.technique && yourSum >= enemySum) return 1; //获胜
    if (enemy.observe > ability.technique && enemySum >= yourSum) return 0; //失败

    if (ability.technique > enemy.observe && yourSum >= enemySum) return 3;
    if (enemy.technique > ability.observe && enemySum >= yourSum) return 0;

    if (ability.desire > enemy.defend && yourSum >= enemySum) return 2;
    if (enemy.desire > ability.defend && enemySum >= yourSum) return 0;

    if (ability.defend > enemy.desire && yourSum >= enemySum) return 4;
    if (enemy.defend > ability.desire && enemySum >= yourSum) return 0;
    return 5; //平局
  }
  function enemyBattle(enemy) {
    const result = battleResult(enemy);
    if (result === 0 || result === 5) {
      if ("failPlotState" in enemy) {
        addLog(issues[enemy.failPlotState]);
        return;
      }
    }
    if (result > 0 && result < 5) {
      if ("enemyStateID" in enemy) {
        setUsedIssue([...usedIssue, enemy.enemyStateID]);
      }
      if (
        "getTreasureStateID" in enemy &&
        !treasure.some((ele) => ele === enemy.getTreasureStateID)
      ) {
        setTreasure([...treasure, enemy.getTreasureStateID]);
        setInsertIssueID(enemy.getTreasureStateID);
      }
      if ("level" in enemy) {
        if (enemy.level >= 3) {
          localStorage.setItem("实力", true);
          setReputation((x) => x + 1);
        }
        if (enemy.level >= 4) localStorage.setItem("无可匹敌", true);
        if (enemy.level >= 5) localStorage.setItem("支配", true);
      } else {
        let poss = Math.random();
        if (poss >= 0.6) setReputation((x) => x + 1);
      }
      if ("winPlotState" in enemy) {
        setInsertIssueID(enemy.winPlotState);
      }
      if (enemy.enemyStateID === 260) localStorage.setItem("一首童谣", true);
    }

    let gainPoss = enemy.gain;
    if (career === athlete) gainPoss += 0.1;
    if (result === 1) {
      addLog({
        stateID: 199,
        logText: "我观察到了敌人的弱点，并一击致胜",
        className: "Cornflowerblue",
        nextStates: [
          { possibility: gainPoss, stateID: enemy.gainState },
          { possibility: 2.0, stateID: 200 },
        ],
      });
    } else if (result === 2) {
      addLog({
        stateID: 199,
        logText: "我激发了敌人的欲望，让他们沉醉于迷惘",
        className: "Blue",
        nextStates: [
          { possibility: gainPoss, stateID: enemy.gainState },
          { possibility: 2.0, stateID: 200 },
        ],
      });
    } else if (result === 3) {
      addLog({
        stateID: 199,
        logText: "我运用技艺击败了敌人",
        className: "Lightslategray",
        nextStates: [
          { possibility: gainPoss, stateID: enemy.gainState },
          { possibility: 2.0, stateID: 200 },
        ],
      });
    } else if (result === 4) {
      addLog({
        stateID: 199,
        logText: "我运用力量击败了敌人",
        className: "Tomato",
        nextStates: [
          { possibility: gainPoss, stateID: enemy.gainState },
          { possibility: 2.0, stateID: 200 },
        ],
      });
    } else if (result === 5) {
      addLog({
        stateID: 199,
        logText: "双方势均力敌。可惜，敌人趁机逃跑了",
        nextStates: [{ possibility: 2.0, stateID: 200 }],
      });
    } else if (result === 0) {
      addLog({
        stateID: 199,
        logText: "我不敌对手，受了重伤。我住院了（时间-3，金钱-2）",
        nextStates: [{ possibility: 2.0, stateID: 200 }],
      });
      setTime((x) => x - 3);
      setMoney((x) => x - 2);
    } else if (result === -1) {
      addLog({
        stateID: 199,
        logText:
          "敌人太过强大，死亡几乎攀上肩膀。我住院了整整半年（时间-5，金钱-3）",
        nextStates: [{ possibility: 2.0, stateID: 592 }], //提示玩家使用诡物
      });
      setTime((x) => x - 5);
      setMoney((x) => x - 3);
    }
  }
  function sheriffBattle(sheriff) {
    const result = battleResult(sheriff);
    if (result > 0 && result < 5) {
      addLog(issues[sheriff.winNextStateID]);
      setSheriff(sheriff.nextSheriff);
    } else {
      addLog(issues[503]);
    }
  }
  function expeditionConsequence() {
    if (sheriff === 0 && reputation >= 10) {
      addLog(issues[504]);
      setSheriff(1);
    } else if (sheriff >= 1) {
      let poss = Math.random();
      if (sheriff === 1 && poss <= reputation * 0.01) {
        addLog(issues[505]);
        setSheriff(2);
      } else if (sheriff === 2 && poss <= reputation * 0.02) {
        addLog(issues[506]);
        setSheriff(3);
      } else if (sheriff === 3 && poss <= reputation * 0.03) {
        addLog(issues[507]);
        setSheriff(4);
      } else if (sheriff === 4 && Math.min(reputation * 0.03, 0.8)) {
        addLog(issues[508]);
        setSheriff(5);
      } else if (sheriff === 5 && Math.min(reputation * 0.03, 0.8)) {
        addLog(issues[520]);
        setSheriff(6);
      } else if (sheriff === 6 && Math.min(reputation * 0.03, 0.8)) {
        addLog(issues[514]);
        setSheriff(7);
      } else if (sheriff === 7 && poss <= Math.min(reputation * 0.03, 0.8)) {
        addLog(issues[515]);
        setSheriff(8);
      } else if (sheriff === 8 && poss <= Math.min(reputation * 0.03, 0.8)) {
        addLog(issues[516]);
        setSheriff(9);
      } else if (sheriff === 9 && poss <= Math.min(reputation * 0.03, 0.8)) {
        addLog(issues[517]);
        setSheriff(10);
      } else if (sheriff === 10 && poss <= reputation * 0.05) {
        addLog(issues[518]);
        setSheriff(11);
      } else addLog(issues[202]);
    } else addLog(issues[202]);
  }
  function win() {
    if (
      career === writer &&
      treasure.some((x) => x === 588) &&
      treasure.some((x) => x === 593) &&
      treasure.some((x) => x === 597)
    ) {
      if (ability.observe >= 40) return 1;
      else return 2;
    }
    if (
      career === athlete &&
      treasure.some((x) => x === 589) &&
      treasure.some((x) => x === 594) &&
      treasure.some((x) => x === 598)
    ) {
      if (ability.defend >= 40) return 1;
      else return 2;
    }
    return 0;
  }
  //UI:
  //background-color:
  function backgroundColor() {
    document.body.style.backgroundColor = backgroundColors[dark];
  }
  //button:
  function winButton() {
    const result = win();
    if (result === 0)
      return <button onClick={() => addLog(issues[700])}>翻开书籍</button>;
    if (result === 1)
      return <button onClick={() => addLog(issues[720])}>我已做好准备</button>;
    return <button>心之力量不足以升变</button>;
  }
  const nextButton = <button onClick={() => nextLog(logList[0])}>下一步</button>;
  const careerChooseButton = (
    <div className="careerChooseButton">
      <button onClick={() => addLog(issues[151])}>写作</button>
      <button onClick={() => addLog(issues[152])}>运动</button>
    </div>
  );
  function spareButton() {
    if (career === writer) return writerActionButton;
    if (career === athlete) return athleteActionButton;
  }
  const writerActionButton = (
    <div className="writerActionButton">
      <button onClick={() => addLog(issues[201])}>外出取材</button>
      <button onClick={() => expeditionConsequence()}>出去转转</button>
      {occultist ? (
        <>
          <button onClick={() => addLog(issues[203])}>磨练</button>
          {winButton()}
        </>
      ) : (
        ""
      )}
    </div>
  );
  const athleteActionButton = (
    <div className="athleteActionButton">
      <button onClick={() => addLog(issues[206])}>参加比赛</button>
      <button onClick={() => expeditionConsequence()}>出去转转</button>
      {occultist ? (
        <>
          <button onClick={() => addLog(issues[314])}>磨练</button>
          {winButton()}
        </>
      ) : (
        ""
      )}
    </div>
  );
  const expeditionButton = (
    <div className="expeditionButton">
      <button onClick={() => addLog(issues[211])}>就在城里转转</button>
      {reputation >= 5 ? (
        <span>
          <button onClick={() => addLog(issues[212])}>去别的城市旅游</button>
          {usedIssue.some((ele) => ele === 260) ? (
            <span>
              <button onClick={() => addLog(issues[213])}>去乡下看看</button>
              {treasure.some((ele) => ele !== 0) ? (
                <>
                  <button onClick={() => addLog(issues[214])}>去森林探险</button>
                  <button onClick={() => addLog(issues[215])}>去山脉身处</button>
                </>
              ) : (
                <div>（提示：需要拥有至少一件诡物，才能前往下一地点）</div>
              )}
            </span>
          ) : (
            <div>（提示：需要击败某些敌人，才能前往下一地点）</div>
          )}
        </span>
      ) : (
        <div>（提示：名声不足，无法前往其他地点）</div>
      )}
    </div>
  );
  const occultButton = (
    <div className="occultButton">
      <button onClick={() => addLog(issues[356])}>是的，我希望有非凡的人生</button>
      <button onClick={() => addLog(issues[353])}>并没有，我对生活很满足</button>
    </div>
  );
  const walletButton = (
    <div className="walletButton">
      <button
        onClick={() => {
          let poss = Math.random();
          if (poss < 0.5) addLog(issues[217]);
          else addLog(issues[218]);
        }}
      >
        打开钱包
      </button>
      <button onClick={() => addLog(issues[219])}>将钱包交给警察</button>
    </div>
  );
  function battleButton() {
    if (!treasureList.some((ele) => true))
      return (
        <div className="battleButton">
          <button onClick={() => enemyBattle(issues[logList[0].stateID].enemy)}>
            战斗！
          </button>
        </div>
      );
    else
      return (
        <div className="battleButton">
          <button
            onClick={() => {
              enemyBattle(issues[logList[0].stateID].enemy);
              setTreasureListOpen(false);
            }}
          >
            战斗！
          </button>
          {usingTreasure ? (
            <button onClick={() => setTreasureListOpen(!treasureListOpen)}>
              选择中：{treasureID[usingTreasure]}
            </button>
          ) : (
            <button onClick={() => setTreasureListOpen(!treasureListOpen)}>
              使用诡物
            </button>
          )}
        </div>
      );
  }
  const treasureList = treasure.map((ele) => {
    return (
      <button
        className="treasureChoose"
        key={`id-${nanoid()}`}
        onClick={() => setUsingTreasure(ele)}
      >
        {treasureID[ele]}
      </button>
    );
  });
  const sheriffOneButton = (
    <div className="sheriffOneButton">
      {logList[0].stateID === 509 ? (
        money >= 10 ? (
          <button
            onClick={() => {
              addLog(issues[510]);
              setMoney((x) => x - 10);
            }}
          >
            用十份资金贿赂
          </button>
        ) : (
          <button>我的资金不够（需要十份）</button>
        )
      ) : (
        ""
      )}
      <button onClick={() => sheriffBattle(issues[logList[0].stateID].sheriff)}>
        战斗！
      </button>
    </div>
  );
  const remakeButton = <button onClick={() => originate()}>重新开始</button>;
  const buttonCondition = () => {
    if (logList[0].stateID === 150) return careerChooseButton;
    if (logList[0].stateID === 200) return spareButton();
    if (logList[0].stateID === 202) return expeditionButton;
    if (logList[0].stateID === 216) return walletButton;
    if (logList[0].stateID === 352) return occultButton;
    if (logList[0].stateID === 509 || logList[0].stateID === 519)
      return sheriffOneButton; //此判断必须在下一行前面
    if ("enemy" in issues[logList[0].stateID]) return battleButton();
    if (logList[0].stateID === 355) return remakeButton;
    return nextButton;
  };

  //all logs:
  const logs = logList.map((oneLog) => {
    return (
      <Log
        className={oneLog.className}
        age={oneLog.age}
        key={oneLog.id}
        logText={oneLog.logText}
      />
    );
  });

  //effects:
  useEffect(() => {
    if (logList.length > maxLogs) logList.pop();
  }, [logList]);
  useEffect(() => {
    if (money < 0) setInsertIssueID(2);
  }, [money]);
  useEffect(() => {
    if (time <= 0) {
      setTime((x) => x + actionPerYear);
      setMoney((x) => x - moneyPerYear);
      setAge((x) => x + 1);
    }
  }, [time]);
  useEffect(() => {
    if (dark >= 10) setInsertIssueID(3);
    else if (dark < 0) setDark(0);
  }, [dark]);
  useEffect(() => {
    if (
      ability.defend + ability.desire + ability.observe + ability.technique >=
      20
    ) {
      localStorage.setItem("质变", true);
      if (
        ability.defend + ability.desire + ability.observe + ability.technique >=
        40
      )
        localStorage.setItem("升华", true);
      if (
        ability.defend + ability.desire + ability.observe + ability.technique >=
        60
      )
        localStorage.setItem("异化", true);
    }
  }, [ability]);
  useEffect(() => {
    if (age === 60) {
      actionPerYear -= 1;
      alert("60岁了，此后每年行动次数减少1");
    }
    if (age === 70) {
      moneyPerYear += 1;
      alert("70岁了，此后每年消耗金钱增加1");
    }
    if (age === 80) {
      moneyPerYear += 1;
      actionPerYear -= 1;
      alert("80岁了，此后每年消耗金钱增加1,每年行动次数减少1");
    }
    if (age === 90) {
      moneyPerYear += 2;
      actionPerYear -= 2;
      alert("90岁了，此后每年消耗金钱增加2,每年行动次数减少2");
    }
    if (age === 100) {
      moneyPerYear += 3;
      actionPerYear -= 2;
      alert("100岁了，此后每年消耗金钱增加3,每年行动次数减少2");
    }
    if (age === 110) {
      moneyPerYear += 3;
      actionPerYear -= 2;
      alert("110岁了，此后每年消耗金钱增加3,每年行动次数减少2");
    }
  }, [age]);
  useEffect(() => {
    if (treasure.some((ele) => true)) localStorage.setItem("奇诡！", true);
  }, [treasure]);
  /* useEffect(() => {
    setMoney(200);
    setReputation(4);
    setTreasure([593, 594, 595, 596, 597, 598, 599, 600]);
    setAbility({ ...ability, observe: 100 });
  }, []); */

  //App:
  return (
    <div className="App">
      {achievementsBox ? (
        <div className="achievementsBackground">
          <Achievements setAchievementsBox={setAchievementsBox} />
        </div>
      ) : (
        ""
      )}
      <button
        className="AchievementsButton"
        onClick={() => setAchievementsBox(true)}
      >
        成就
      </button>
      <br />
      {backgroundColor()}
      {occultist ? <Ability {...ability} /> : ""}
      {age >= 18 ? (
        <div className="AdultCondition">
          <p>
            <span style={{ color: "#007d93", backgroundColor: "#c3f6ff" }}>
              <img style={{ maxWidth: "30px" }} src={clockPicture} alt="icon" />
              时间：{time}
            </span>
            ,
            <span style={{ color: "#ccac00", backgroundColor: "#fffdf4" }}>
              <img style={{ maxWidth: "25px" }} src={moneyPicture} alt="icon" />
              金钱：{money}
            </span>
          </p>
          <p>兴趣：{hobby.length > 0 ? hobby : "无"}</p>
          <p>职业：{career}</p>
          <p>名声：{reputation}</p>
        </div>
      ) : (
        ""
      )}
      {buttonCondition()}
      {treasureListOpen ? treasureList : ""}
      {logs}
    </div>
  );
}

export default App;