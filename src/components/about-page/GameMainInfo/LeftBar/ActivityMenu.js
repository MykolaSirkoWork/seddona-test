import { useState } from 'react';
import arrowIcon from '../../../../assets/images/icons/arrow.svg';
import Checkbox from '../../../common/Checkbox';

const ActivityMenu = () => {
  const [eventTypes, setEventTypes] = useState({
    sales: { name: 'Sales', checked: false  },
    listing: { name: 'Listing', checked: false },
    offers: { name: 'Offers', checked: false },
    collectionOffers: { name: 'Collection Offers', checked: false },
    transfers: { name: 'Transfers', checked: false }
  })
  const checkboxHanlder = (e) => {
    setEventTypes((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        checked: !prev[e.target.name].checked
      }
    }))
  } 
  const [accItems, setAccItems] = useState({
    attr1: true,
  })
  const accordionHandler = (e) => {
    const key = e.target.dataset.key;
    setAccItems(prev => ({ ...prev, [key]: !prev[key]}))
  };

  return (
    <div className="lb-menu">
      <div className="lb-menu__item lb-menu__item--with-acc">
        <div className="acc-btn f-ji-sb" onClick={accordionHandler} data-key="attr1" >
          <span className="d-block">Event Type</span>
          <img src={arrowIcon} className={`acc-arrow ${accItems["attr1"] ? 'open' : '' }`} />
        </div>
        <div className={`acc-panel ${accItems["attr1"] ? 'active' : ''}`}>
          <ul className='event-types'>
            {Object.keys(eventTypes).map((item, idx) => {
              return (
                <li className='event-types__item' key={item + idx}>
                  <span>{eventTypes[item].name}</span>
                  <Checkbox
                    onChange={checkboxHanlder}
                    checked={eventTypes[item].checked}
                    name={item}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ActivityMenu;