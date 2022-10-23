const GameCard = ({ imgSrc, released, title }) => {
  return (
    <div className="game-card">
      <div className="game-card__img-container">
        <img src={imgSrc} alt="game poster" />
      </div>
      {!released && <div className="game-card__release-info">coming soon</div>}
      <div className="game-card__title-wrapper">
        <h3 className="game-card__title">{title}</h3>
      </div>
    </div>
  )
}
export default GameCard;