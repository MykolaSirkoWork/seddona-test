import Checkbox from '../../../common/Checkbox';
import { useState } from "react";
import MinMaxInput from '../../../common/MinMaxInput';
import arrowIcon from '../../../../assets/images/icons/arrow.svg';

const ItemsMenu = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  const priceRangeHandler = (e) => setPriceRange(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const checkboxHandler = () => setCheckbox(!checkbox);
  
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
    <ul className="lb-menu">
      <li className="lb-menu__item d-flex f-ji-sb">
        <span className="d-block">Buy Now</span>
        <Checkbox onChange={checkboxHandler} checked={checkbox} />
      </li>
      <li className="lb-menu__item d-flex f-ji-sb">
        <span className="d-block">Price Range</span>
        <MinMaxInput
          minName="min"
          minValue={priceRange.min}
          maxName="max"
          maxValue={priceRange.max}
          onChange={priceRangeHandler}
        />
      </li>
      <li className="lb-menu__item lb-menu__item--with-acc">
        <div className="acc-btn f-ji-sb" onClick={accordionHandler} data-key="attr1" >
          <span className="d=block">Attributes</span>
          <img src={arrowIcon} className={`acc-arrow ${accItems["attr1"] ? 'open' : '' }`} />
        </div>
        <div className={`acc-panel ${accItems["attr1"] ? 'active' : ''}`}>
          lorem ipsum
        </div>
      </li>
      <li className="lb-menu__item lb-menu__item--with-acc">
        <div className="acc-btn f-ji-sb" onClick={accordionHandler} data-key="attr2" >
          <span className="d=block">Attributes</span>
          <img src={arrowIcon} className={`acc-arrow ${accItems["attr2"] ? 'open' : '' }`} />
        </div>
        <div className={`acc-panel ${accItems["attr2"] ? 'active' : ''}`}>
          lorem ipsum
        </div>
      </li>
    </ul>
  )
}

export default ItemsMenu;