const GamePreview = ({ image, gameName, createdBy, extraClasses }) => {
  return (
    <div className={`game-preview ${extraClasses ?? ''}`}>
       <div className="img-container">
          {image && <img src={image} />}
        </div>
        <h2 className="game-preview__game-name">{gameName}</h2>
        <p className="game-preview__created-by">by <span>{createdBy}</span></p>
    </div>
  )
}

export default GamePreview;
