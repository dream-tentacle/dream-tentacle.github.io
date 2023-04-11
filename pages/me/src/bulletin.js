import React from "react";
import "./bulletin.css";
function Bulletin(props) {
  return (
    <div className="BulletinTextBox">
      <button className="BulletinButton" onClick={() => props.setBulletinBox(false)}>
        关闭
      </button>
      <div>
        <h3>版本：0.3.5</h3>
        <ul>
          <li>新增更多仪式</li>
          <li>添加大学中的事件</li>
        </ul>
        <h3>版本：0.3.4</h3>
        <ul>
          <li>新增更多仪式</li>
          <li>修改了背景音乐</li>
        </ul>
        <h3>版本：0.3.3</h3>
        <ul>
          <li>修改了一些书籍文本为文言文</li>
          <li>添加了目之性相的晋升仪式</li>
          <li>修改了背景音乐</li>
        </ul>
        <h3>版本：0.3.2</h3>
        <ul>
          <li>
            添加了一个网易云的播放器，你可将它暂时作为背景音乐，不久之后会有本游戏自己的音乐
          </li>
        </ul>
        <h3>版本：0.3.1</h3>
        <ul>
          <li>大幅完善世界观</li>
          <li>新增游戏剧情</li>
          <li>新增书店地点</li>
          <li>新增书籍选项</li>
        </ul>
        <h3>版本：0.2.7</h3>
        <ul>
          <li>优化版本公告界面</li>
          <li>新增跳过剧情功能</li>
          <li>参数平衡性调整</li>
          <li>新增效果：20/40/60属性时减少消耗1金钱/年</li>
        </ul>
        <h3>版本：0.2.6</h3>
        <ul>
          <li>修改错误文本</li>
          <li>优化公告界面</li>
        </ul>
        <h3>版本：0.2.5</h3>
        <ul>
          <li>适当提升了运动员磨练效果</li>
          <li>适当降低了运动员受伤概率</li>
          <li>新增一个失败结局</li>
        </ul>
        <h3>版本：0.2.4</h3>
        <ul>
          <li>优化战斗失败提示</li>
          <li>适当降低战斗失败惩罚</li>
        </ul>
        <h3>版本：0.2.3</h3>
        <ul>
          <li>优化参数</li>
        </ul>
        <h3>版本：0.2.2</h3>
        <ul>
          <li>调整目系列诡物名称与介绍</li>
        </ul>
        <h3>版本：0.2.1</h3>
        <ul>
          <li>完成基本游戏框架</li>
        </ul>
      </div>
    </div>
  );
}
export default Bulletin;
