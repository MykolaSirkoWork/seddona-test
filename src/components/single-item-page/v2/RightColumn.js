import shareIcon from '../../../assets/images/icons/share-icon.svg';
import dotsIcon from '../../../assets/images/icons/dots-icon.svg';
import verifiedIcon from '../../../assets/images/icons/verified-icon.svg';
import viewsIcon from '../../../assets/images/icons/views-icon.svg';
import favoriteIcon from '../../../assets/images/icons/favorite-icon.svg';
import priceHistoryIcon from '../../../assets/images/icons/price-history-icon.svg';
import { ReactComponent as ClockIcon } from '../../../assets/images/icons/clock-icon.svg';

import SingleAccordion from '../../common/SingleAccordion';
import Button from '../../common/Button';
import Dropdown from '../../common/Dropdown';

const RightColumn = () => {
  return (
    <div className='pt-24'>
      <div className='sell-btn-wrapper'>
        <Button text="sell" extraClasses="btn--orange" />
      </div>
      <div className="item-info">
        <div className='item-info__header'>
          <div className='d-flex'>
            <span className='d-block'>SuperYeti Land Quarries</span>
            <img src={verifiedIcon} alt="verified icon"  className='ml-6'/>
          </div>
          <div className="buttons">
            <button>
              <img src={shareIcon} alt="share button" />
            </button>
            <button>
              <img src={dotsIcon} alt="additiaonal functions button" />  
            </button> 
          </div>
        </div>
   
          <h2 className='item-info__title' >SuperYeti Land Quarries #2548</h2>
        
        <div className='item-info__additional-info'>
          <p className='owned-by'>Owned by <span>you</span></p>
          <div className='dynamic-data mr-14'>
            <img src={viewsIcon} alt="views icon" />
            <span>23 Views</span>
          </div>
          <div className='dynamic-data'>
            <img src={favoriteIcon} alt="favorite icon" />
            <span>1 Favorite</span>
          </div>
        </div>
      </div>
      <SingleAccordion
        title="Price History"
        icon={priceHistoryIcon}
        hasDivider
        extraClasses="mb-18"
      >
        <div className='price-history-acc'>
          <div className='sellect-wrapper'>
            <Dropdown
              data={selectData}
              onChange={() => {}}
              currValue={selectData[0].title}
            />
          </div>
          <div className='data'>
            <div className='no-data'>
              <ClockIcon />
              <h4>No data yet</h4>
              <p>Check back later</p>
            </div>
          </div>
        </div>
      </SingleAccordion>
    </div>
  )
}

export default RightColumn;

const selectData = [
  { value: 90, title: 'Last 90 days' },
  { value: 60, title: 'Last 60 days' },
  { value: 30, title: 'Last 30 days' },
]