import SingleAccordion from "../common/SingleAccordion";
import descIcon from '../../assets/images/icons/info-icon.svg';
import verifiedIcon from '../../assets/images/icons/verified-icon.svg';
import labelIcon from '../../assets/images/icons/label-icon.svg';
import Prop from './Prop';
import itemBigImage from '../../assets/images/item-big.png';

const properties = [
  {
    name: 'map',
    text1: 'Show Drifts',
    text2: '17% have this trait'
  },
  {
    name: 'quadrant 1',
    text1: 'Dry River Bed',
    text2: '4% have this trait'
  },
  {
    name: 'quadrant 2',
    text1: 'Ship Wreck',
    text2: '11% have this trait'
  }
]

const LeftColumn = () => {
  return (
    <div className="pt-50">
      <div className="img-container mb-18">
        <img src={itemBigImage} alt="item img" />
      </div>
      <SingleAccordion
        title='Description'
        icon={descIcon}
        hasDivider
        alwaysOpen
        hideArrow
        extraClasses="mb-18"
      >
        <div className="description-acc">
          <div className="d-flex f-ai-c">
            <h4>By <span className="company-name">SuperYetiOG</span></h4>
            <img src={verifiedIcon} alt="verified icon"/>
          </div>
          <p>SuperYeti Land Quarries are a fresh new take on land ownership in the metaverse. Each land yields valuable resources that are convertible to in-game assets which can be bought or sold on our marketplace.</p>
        </div>
      </SingleAccordion>
      <SingleAccordion
        title="Properties"
        icon={labelIcon}
        extraClasses="mb-18"
      >
        <div className="properties-acc">
          {properties.map((prop, idx) => (
            <Prop
              key={prop.name + idx}
              text1={prop.text1}
              text2={prop.text2}
              name={prop.name}
            />
          ))}
        </div>
      </SingleAccordion>
    </div>
  )
}

export default LeftColumn;