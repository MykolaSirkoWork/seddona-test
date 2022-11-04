import React, { useState } from 'react';
import Banner from "./Banner"
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import bannerImg from '../../../assets/images/banner.png';

export const TabsContext = React.createContext();

const GameMainInfo = () => {
  const [currTab, setCurrTab] = useState('about');
  const tabHandler = (e) => setCurrTab(e.target.name);
  
  const [eventTypes, setEventTypes] = useState({
    sales: { name: 'Sales', checked: true  },
    listing: { name: 'Listing', checked: false },
    offers: { name: 'Offers', checked: false },
    collectionOffers: { name: 'Collection Offers', checked: false },
    transfers: { name: 'Transfers', checked: false }
  })
  const checkboxHandler = (e) => {
    setEventTypes((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        checked: !prev[e.target.name].checked
      }
    }))
  } 
  const contextValue = {
    activity: {
      eventTypes,
      checkboxHandler
    }
  }
  return (
    <TabsContext.Provider value={contextValue}>
      <div className="info">
        <Banner bgImage={bannerImg} />
        <div className='info__main container'>
          <LeftBar currTab={currTab} />
          <RightBar currTab={currTab} tabHandler={tabHandler} />
        </div>
      </div>
    </TabsContext.Provider>
  )
}

export default GameMainInfo;