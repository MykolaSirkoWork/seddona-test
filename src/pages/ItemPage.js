import LeftColumn from "../components/single-item-page/LeftColumn";
import RightColumn from "../components/single-item-page/RightColumn";
import LeftColumnV2 from '../components/single-item-page/v2/LeftColumn';
import RightColumnV2 from '../components/single-item-page/v2/RightColumn';
const ItemPage = () => {
  return (
    <div className="item-page">
      <div className="container">
        <div className="item-page__content">
          {/* <LeftColumn />
          <RightColumn /> */}
          <LeftColumnV2 />
          <RightColumnV2 />
        </div>
      </div>
    </div>
  )
}

export default ItemPage;
