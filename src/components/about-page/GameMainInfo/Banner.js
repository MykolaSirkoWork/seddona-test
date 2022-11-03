//import bannerImg from '../../../assets/images/banner.png';

const Banner = ({ bgImage }) => {
  const bgStyles = bgImage ? { backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 67.76%, rgba(0, 0, 0, 0.8) 93.8%), url(${bgImage})` } : {};
  return (
    <div className="banner" style={bgStyles}>
        {/* <div className="game-header container">
          <div className="game-header__preview-img">
              <img src={bannerImg} />
          </div>
          <h2 className="game-header__title">{gameName}</h2>
          <p className="game-header__created-by">by <span>{createdBy}</span></p>
        </div> */}
      </div>
  )
}

export default Banner;