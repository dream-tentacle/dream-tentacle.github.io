import React from "react";
import "./bulletin.css";
function Bulletin(props) {
  return (
    <div className="BulletinTextBox">
      <button className="BulletinButton" onClick={() => props.setBulletinBox(false)}>
        关闭
      </button>
      <div>
        <h2>版本：0.2.6</h2>
        <ul>
          <li>修改错误文本</li>
          <li>优化公告界面</li>
        </ul>
        <h2>版本：0.2.5</h2>
        <ul>
          <li>适当提升了运动员磨练效果</li>
          <li>适当降低了运动员受伤概率</li>
          <li>新增一个失败结局</li>
        </ul>
        <h2>版本：0.2.4</h2>
        <ul>
          <li>优化战斗失败提示</li>
          <li>适当降低战斗失败惩罚</li>
        </ul>
        <h2>版本：0.2.3</h2>
        <ul>
          <li>优化参数</li>
        </ul>
        <h2>版本：0.2.2</h2>
        <ul>
          <li>优化参数</li>
        </ul>
        <h2>版本：0.2.1</h2>
        <ul>
          <li>完成基本游戏框架</li>
        </ul>
      </div>
    </div>
  );
}
export default Bulletin;
