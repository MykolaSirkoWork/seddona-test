import { useState } from "react";
import Banner from "../components/about-page/GameMainInfo/Banner"
import GamePreview from "../components/common/GamePreview";
import shareIcon from '../assets/images/icons/share-icon.svg';
import dotsIcon from '../assets/images/icons/dots-icon.svg';
import TabContainer from "../components/common/TabContainer";
import CollectedTab from "../components/details-page/CollectedTab";

const tabs = [
  { key: 'collected', title: 'collected', component: <CollectedTab /> },
  { key: 'created', title: 'created', component: <>content</> },
  { key: 'favorited', title: 'favorited', component: <>contasent</> },
  { key: 'activity', title: 'activity', component: <>contesasnt</> },
  { key: 'more', title: 'more', component: <>contsent</> },
]

const DetailsPage = () => {
  const [currTab, setCurrTab] = useState('collected');
  const tabHandler = (e) => setCurrTab(e.target.name);
  return (
    <div className="about">
      <div className="info">
        <Banner  />
        <div className='info_v2 container'>
          <div className="d-flex f-ji-sb mb-40" >
            <div className="game-preview__container">
              <GamePreview gameName="Yeti Bomber" createdBy="SuperYeti"/>
            </div>
            <div className="d-flex f-ai-c">
              <button className="btn-icon mr-10">
                <img src={shareIcon} alt="share button" />
              </button>
              <button className="btn-icon">
                <img src={dotsIcon} alt="additiaonal functions button" />  
              </button> 
            </div>
          </div>
          <TabContainer tabs={tabs} currTab={currTab} tabHandler={tabHandler} />
        </div>
      </div>
    </div>
  )
}

export default DetailsPage