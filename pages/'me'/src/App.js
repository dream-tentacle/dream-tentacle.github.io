import React, { useState } from "react";
import { nanoid } from "nanoid";
import Log from "./components/Log";
import issues from "./source/Issues";
import Ability from "./components/Ability";
import "./App.css";

//hobbies
const write = "写作", // eslint-disable-next-line
  sport = 1;

//career
const writer = "作家";

const actionPerYear = 10;

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

function App() {
  //States:
  const [age, setAge] = useState(18);
  const [money, setMoney] = useState(3);
  const [hobby, setHobby] = useState([]);
  const [career, setCareer] = useState("无");
  const [time, setTime] = useState(actionPerYear);
  const [reputation, setReputation] = useState(0);
  const [occultist, setOccultist] = useState(false);
  const [dark, setDark] = useState(0);
  const [insertIssueID, setInsertIssueID] = useState(0);
  const [usedIssue, setUsedIssue] = useState([]);
  const [sheriff, setSheriff] = useState(0);
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
    setAbility({
      observe: ability.observe + observe,
      defend: ability.defend + defend,
      technique: ability.technique + technique,
      desire: ability.desire + desire,
    });
  }
  function dealMoney(moneyGain) {
    if (money < -moneyGain) {
      setInsertIssueID(2); //花光了钱
    }
    setMoney(money + moneyGain);
  }
  function dealTime(timeFly) {
    if (time <= timeFly) {
      dealMoney(-5); //每年花5份资金
      setTime(time + actionPerYear - timeFly);
      setAge(age + 1);
    } else setTime(time - timeFly);
  }
  function dealDark(darkGain) {
    if (dark + darkGain >= 10) {
      //过于黑暗
      setInsertIssueID(3);
    }
    setDark(dark + darkGain);
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
    if ("reputation" in newIssue)
      setReputation(reputation + newIssue.reputation);
    //三种失败途径
    if ("dark" in newIssue) dealDark(newIssue.dark);
    if ("time" in newIssue) dealTime(newIssue.time);
    if ("money" in newIssue) dealMoney(newIssue.money);
    //一些特殊事件结果
    if (newIssue.stateID === 100) setHobby([...hobby, write]);
    if (newIssue.stateID === 151) setCareer(writer);
    if (newIssue.stateID === 360) setOccultist(true);
  }
  function addLog(newIssue) {
    if (
      "hidden" in newIssue ||
      (!occultist && newIssue.stateID <= 198 && newIssue.stateID >= 195)
    ) {
      if (newIssue.stateID === 305) {
        if (hobby.some((onehobby) => onehobby === write)) {
          nextLog(issues[302]);
        }
      }
      nextLog(newIssue);
    } else if (
      newIssue.stateID === 260 &&
      usedIssue.some((ele) => ele === 260)
    ) {
      nextLog(issues[241]);
    } else {
      setLogList([
        {
          stateID: newIssue.stateID,
          logText: newIssue.logText,
          nextStates: newIssue.nextStates,
          id: `log-${nanoid()}`,
          age: age,
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
      if (poss <= 0.4) {
        addLog(issues[351]);
        return true;
      }
    }
  }
  function nextLog(nowState) {
    let poss = Math.random();
    if (specialIssue(nowState)) return;
    if (insertIssueID !== 0) {
      const tmp = insertIssueID;
      setInsertIssueID(0);
      addLog(issues[tmp]);
      return;
    }
    let newIssue;
    for (let i = 0; i < nowState.nextStates.length; i++) {
      const possibleIssue = nowState.nextStates[i];
      if (poss <= possibleIssue.possibility) {
        newIssue = issues[possibleIssue.stateID];
        if (newIssue.stateID === 0) {
          originate();
          return;
        } else addLog(newIssue);
        break;
      } else poss -= possibleIssue.possibility;
    }
  }
  function battleResult(enemy) {
    const yourSum =
      ability.observe + ability.technique + ability.defend + ability.desire;
    const enemySum =
      enemy.observe + enemy.technique + enemy.defend + enemy.desire;
    if (ability.observe > enemy.technique && yourSum >= enemySum) return 1; //获胜
    if (ability.desire > enemy.defend && yourSum >= enemySum) return 2;
    if (ability.technique > enemy.observe && yourSum >= enemySum) return 3;
    if (ability.defend > enemy.desire && yourSum >= enemySum) return 4;

    if (enemy.observe > ability.technique && enemySum >= yourSum) return 0; //失败
    if (enemy.desire > ability.defend && enemySum >= yourSum) return 0;
    if (enemy.technique > ability.observe && enemySum >= yourSum) return 0;
    if (enemy.defend > ability.desire && enemySum >= yourSum) return 0;
    return 5; //平局
  }
  function enemyBattle(enemy) {
    const result = battleResult(enemy);
    if ("enemyStateID" in enemy && result > 0 && result < 5) {
      setUsedIssue([...usedIssue, enemy.enemyStateID]);
    }
    if (result === 1) {
      addLog({
        stateID: 199,
        logText: "我观察到了敌人的弱点，并一击致胜",
        nextStates: [
          { possibility: enemy.gain, stateID: enemy.gainState },
          { possibility: 2.0, stateID: 200 },
        ],
      });
    } else if (result === 2) {
      addLog({
        stateID: 199,
        logText: "我激发了敌人的欲望，让他们沉醉于迷惘",
        nextStates: [
          { possibility: enemy.gain, stateID: enemy.gainState },
          { possibility: 2.0, stateID: 200 },
        ],
      });
    } else if (result === 3) {
      addLog({
        stateID: 199,
        logText: "我运用技艺击败了敌人",
        nextStates: [
          { possibility: enemy.gain, stateID: enemy.gainState },
          { possibility: 2.0, stateID: 200 },
        ],
      });
    } else if (result === 4) {
      addLog({
        stateID: 199,
        logText: "我运用力量击败了敌人",
        nextStates: [
          { possibility: enemy.gain, stateID: enemy.gainState },
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
        logText: "我不敌对手，受了重伤。我住院了",
        nextStates: [{ possibility: 2.0, stateID: 200 }],
      });
      dealMoney(-2);
      dealTime(2);
    }
  }
  function sheriffBattle(sheriff) {
    const result = battleResult(sheriff);
    if (result === 0 || result === 5) {
      addLog(issues[400]);
    } else {
      addLog(issues[sheriff.winNextStateID]);
    }
  }
  function expeditionConsequence() {
    if (sheriff === 0 && reputation >= 10) {
      addLog(issues[401]);
      setSheriff(1);
    } else if (sheriff >= 1) {
      let poss = Math.random();
      if (sheriff === 1 && poss <= reputation * 0.01) {
        addLog(issues[402]);
        setSheriff(2);
      } else if (sheriff === 2 && poss <= reputation * 0.02) {
        addLog(issues[403]);
        setSheriff(3);
      } else if (sheriff === 3 && poss <= reputation * 0.04) {
        addLog(issues[404]);
        setSheriff(4);
      } else if (
        sheriff === 4 &&
        reputation >= 15 &&
        poss <= reputation * 0.04
      ) {
        addLog(issues[405]);
        setSheriff(5);
      } else addLog(issues[202]);
    } else addLog(issues[202]);
  }
  //UI:
  //background-color:
  function backgroundColor() {
    document.body.style.backgroundColor = backgroundColors[dark];
  }
  //button:
  const nextButton = (
    <button onClick={() => nextLog(logList[0])}>下一步</button>
  );
  function spareButton() {
    if (career === writer) return writerActionButton;
  }
  const writerActionButton = (
    <div className="spareButton">
      <button onClick={() => addLog(issues[201])}>写作</button>
      <button onClick={() => expeditionConsequence()}>出去转转</button>
      {occultist ? (
        <button onClick={() => addLog(issues[203])}>磨练</button>
      ) : (
        ""
      )}
    </div>
  );
  const expeditionButton = (
    <div className="expeditionButton">
      <button onClick={() => addLog(issues[211])}>就在城里转转</button>
      {reputation >= 5 ? (
        <button onClick={() => addLog(issues[212])}>去别的城市旅游</button>
      ) : (
        <span>（提示：名声不足，无法前往其他地点）</span>
      )}
    </div>
  );
  const occultButton = (
    <div className="occultButton">
      <button onClick={() => addLog(issues[356])}>
        是的，我希望有非凡的人生
      </button>
      <button onClick={() => addLog(issues[353])}>
        并没有，我对生活很满足
      </button>
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
  const battleButton = (
    <div className="battleButton">
      <button onClick={() => enemyBattle(issues[logList[0].stateID].enemy)}>
        战斗！
      </button>
    </div>
  );
  const sheriffOneButton = (
    <div className="sheriffOneButton">
      {money >= 10 ? (
        <button
          onClick={() => {
            addLog(issues[407]);
            dealMoney(-10);
          }}
        >
          用十份资金贿赂
        </button>
      ) : (
        <span>我的资金不够（需要十份）</span>
      )}
      <button onClick={() => sheriffBattle(issues[logList[0].stateID].sheriff)}>
        战斗！
      </button>
    </div>
  );
  const buttonCondition = () => {
    if (logList[0].stateID === 200) return spareButton();
    if (logList[0].stateID === 202) return expeditionButton;
    if (logList[0].stateID === 216) return walletButton;
    if (logList[0].stateID === 352) return occultButton;
    if (logList[0].stateID === 406) return sheriffOneButton;
    if ("enemy" in issues[logList[0].stateID]) return battleButton;
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

  //App:
  return (
    <div className="App">
      {backgroundColor()}
      {occultist ? <Ability {...ability} /> : ""}
      {age >= 18 ? (
        <div className="AdultCondition">
          <p>
            <span Style="color: #007d93">时间：{time}</span>,{" "}
            <span Style="color: #ccac00">金钱：{money}</span>
          </p>
          <p>兴趣：{hobby.length > 0 ? hobby : "无"}</p>
          <p>职业：{career}</p>
          <p>名声：{reputation}</p>
        </div>
      ) : (
        ""
      )}
      {buttonCondition()}
      {logs}
    </div>
  );
}

export default App;
