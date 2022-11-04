import TabContainer from "../../../common/TabContainer";
import AboutTab from "./AboutTab";
import ActivityTab from "./ActivityTab";
import ItemsTab from "./ItemsTab";

const tabs = [
  { key: 'about', title: 'About', component: <AboutTab /> },
  { key: 'items', title: 'Items', component: <ItemsTab /> },
  { key: 'activity', title: 'Activity', component: <ActivityTab /> },
]
const RightBar = ({  currTab, tabHandler }) => {
  return (
    <div className="right-bar">
      <TabContainer tabs={tabs} currTab={currTab} tabHandler={tabHandler} />
    </div>
  )
}

export default RightBar;