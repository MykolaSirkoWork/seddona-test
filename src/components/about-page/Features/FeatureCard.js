const FeatureCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="feature-card">
      <div className="feature-card__img-container">
        <img src={imgSrc} alt="feature img" />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{desc}</p>
    </div>
  )
}

export default FeatureCard;