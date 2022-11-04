import Dropdown from "../../../common/Dropdown";
import { items, sortData } from "../../../../data";
import activityStatsImage from '../../../../assets/images/activity-stats.png';
import { useContext } from "react";
import { TabsContext } from "..";
import Button from "../../../common/Button";
import { ReactComponent as CloseIcon } from '../../../../assets/images/icons/close-icon.svg';
import TrippleBarIcon from "../../../common/TrippleBarIcon";
import ActivityTable from "./ActivityTable";


const ActivityTab = () => {
  const { activity } = useContext(TabsContext)
  const { eventTypes, checkboxHandler } = activity;
  console.log(eventTypes);
  return (
    <div className="activity-tab">
      <div className="d-flex f-ji-fe">
        <Dropdown 
            data={sortData}
            onChange={() => {}}
            currValue={sortData[0].title}
          />
      </div>
      <div className="shown-events mb-12">
        {Object.keys(eventTypes).map((item, idx) => {
          return eventTypes[item].checked && (
            <div key={item+idx} className="shown-events__item">
              <span>{eventTypes[item].name}</span>
              <button className="btn-icon" name={item} onClick={checkboxHandler}>
                <CloseIcon />
              </button>
            </div>
          )
        })}
        <Button text="Clear All" extraClasses="clear-btn" />
      </div>
      <div className="d-flex mb-20">
        <div className="activity-tab__stats-info mr-32">
          <div className="title">90 day avg.price</div>
          <div className="value">
            <TrippleBarIcon extraClasses="mr-2" />
            <span>0.0551</span>
          </div>
        </div>
        <div className="activity-tab__stats-info">
          <div className="title">90 day volume</div>
          <div className="value">
            <TrippleBarIcon extraClasses="mr-2" />
            <span>0.0551</span>
          </div>
        </div>
      </div>
      <div className="activity-tab__stats-graph mb-20">
        <img src={activityStatsImage} alt="activity statistics" />
      </div>
      <ActivityTable />
  </div>
  )
}

export default ActivityTab;
