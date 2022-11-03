
const TabContainer = ({ tabs, currTab, tabHandler }) => {
  return (
    <div className="tabs">
      <div className="tabs__header">
        {tabs.map((item, idx) => (
          <button
            className={currTab === item.key ? 'active' : ''}
            key={idx}
            name={item.key}
            onClick={tabHandler}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="tabs__body">
        {tabs.map(tab => currTab === tab.key && tab.component)}
      </div>
    </div>
  )
}
export default TabContainer;