import { useState } from 'react';
import { thumbnails } from '../../../../data';


const AboutTab = () => {
  const [displayIdx, setDisplayIdx] = useState(0);
  const thumbnailHandler = (e) => {
    setDisplayIdx(e.target.dataset.idx)
  }
  
  return (
    <div className="about-tab">
      <div className="data-panel">
        {thumbnails[displayIdx].videoSrc ? (
          <video src={thumbnails[displayIdx].videoSrc} controls poster={thumbnails[displayIdx].imageSrc}/>
            
        ) : <img src={thumbnails[displayIdx].imageSrc} alt={thumbnails[displayIdx].alt} />}
      </div>
      <div className="thumbnails-panel">
        {thumbnails.map((item, idx) => {
          return (
            <div key={idx} className={`thumbnails-panel__item ${+idx === +displayIdx ? 'thumbnails-panel__item--active': ''}`} >
              <img  src={item.imageSrc} alt={item.alt} onClick={thumbnailHandler} data-idx={idx}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutTab;