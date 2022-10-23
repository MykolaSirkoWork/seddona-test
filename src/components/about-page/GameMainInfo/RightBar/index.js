import AboutTab from "./AboutTab";
import ActivityTab from "./ActivityTab";
import ItemsTab from "./ItemsTab";

const tabs = [
  { key: 'about', component: <AboutTab /> },
  { key: 'items', component: <ItemsTab /> },
  { key: 'activity', component: <ActivityTab /> },
]
const RightBar = ({  currTab, tabHandler }) => {
  return (
    <div className="right-bar">
      <div className="tabs">
        <ul className="tabs__nav">
          <li className={currTab === 'about' ? 'active' : ''}><button name="about" onClick={tabHandler}>About</button></li>
          <li className={currTab === 'items' ? 'active' : ''}><button name="items" onClick={tabHandler}>Items</button></li>
          <li className={currTab === 'activity' ? 'active' : ''}><button name="activity" onClick={tabHandler}>Activity</button></li>
        </ul>
        <div className="tabs__panel">
          {tabs.map(tab => currTab === tab.key && tab.component)}
        </div>
      </div>
    </div>
  )
}

export default RightBar;