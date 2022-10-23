import { useState } from 'react';
import Banner from "./Banner"
import LeftBar from './LeftBar';
import RightBar from './RightBar';


const GameMainInfo = () => {
  const [currTab, setCurrTab] = useState('about');
  const tabHandler = (e) => setCurrTab(e.target.name);
  
  return (
    <div className="info">
      <Banner gameName="Yati bomber" createdBy="SuperYeti" />
      <div className='info__main container'>
        <LeftBar currTab={currTab} />
        <RightBar currTab={currTab} tabHandler={tabHandler} />
      </div>
    </div>
  )
}

export default GameMainInfo;