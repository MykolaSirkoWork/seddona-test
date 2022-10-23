import { useState } from 'react';
import Banner from "./Banner"
import LeftBar from './LeftBar';


const GameMainInfo = () => {
  const [currTab, setCurrTab] = useState('about');
  const tabHandler = (e) => setCurrTab(e.target.name);
  return (
    <div className="info">
      <Banner gameName="Yati bomber" createdBy="SuperYeti" />
      <div className='info__main container'>
        <LeftBar currTab={currTab} />
      </div>
    </div>
  )
}

export default GameMainInfo;