import { useState } from "react";
import arrowIcon from '../../../../assets/images/icons/arrow.svg'

const AboutMenu = () => {
  const [accItems, setAccItems] = useState({
    attr1: false,
    attr2: false,
    attr3: false,
  })
  const accordionHandler = (e) => {
    const key = e.target.dataset.key;
    setAccItems(prev => ({ ...prev, [key]: !prev[key]}))
  };
  return (
    <>
      <ul className="lb-menu">
        <li className="lb-menu__item lb-menu__item--with-acc">
          <div className="acc-btn f-ji-sb" onClick={accordionHandler} data-key="attr1" >
            <span className="d=block">game details</span>
            <img src={arrowIcon} className={`acc-arrow ${accItems["attr1"] ? 'open' : '' }`} />
          </div>
          <div className={`acc-panel ${accItems["attr1"] ? 'active' : ''}`}>
            lorem ipsum
          </div>
        </li>
        <li className="lb-menu__item lb-menu__item--with-acc">
          <div className="acc-btn f-ji-sb" onClick={accordionHandler} data-key="attr2" >
            <span className="d=block">system requirements</span>
            <img src={arrowIcon} className={`acc-arrow ${accItems["attr2"] ? 'open' : '' }`} />
          </div>
          <div className={`acc-panel ${accItems["attr2"] ? 'active' : ''}`}>
            lorem ipsum
          </div>
        </li>
      </ul>
    </>
  )
}

export default AboutMenu;