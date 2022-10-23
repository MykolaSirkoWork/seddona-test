import eth from '../../../../assets/images/eth.svg';

const ItemCard = ({
  imageSrc,
  gameName,
  ratting,
  itemName
}) => {
  return (
    <div className="item-card">
      <div className="item-card__img-container">
        {imageSrc && <img src={imageSrc} alt="item" />}
      </div>
      <div className="item-card__body">
        <h4 className="item-card__game-name">{gameName}</h4>
        <div className="f-fd-row f-ji-sb d-flex">
          <h3 className="item-card__item-name">{itemName}</h3>
          <div className="item-card__item-ratting">
            <img src={eth} alt="item ratting icon" />
            <span>{ratting}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;