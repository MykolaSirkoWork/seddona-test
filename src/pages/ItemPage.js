import LeftColumn from "../components/single-item-page/LeftColumn";
import RightColumn from "../components/single-item-page/RightColumn";

const ItemPage = () => {
  return (
    <div className="item-page">
      <div className="container">
        <div className="item-page__content">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  )
}

export default ItemPage;
