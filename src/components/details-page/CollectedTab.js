import Dropdown from "../common/Dropdown"
import SearchField from "../common/SearchField"
import { sortPrice } from "../../data"
import { collectedItems } from "../../data"

import ItemCard from "../about-page/GameMainInfo/RightBar/ItemCard"
const CollectedTab = () => {

  return (
    <div className="collected-tab">
      <div className="d-flex f-ji-fe mb-30">
        <SearchField placeholder="Search Items, Attributes" extraClasses="mr-10" />
        <Dropdown
          data={sortPrice}
          onChange={() => {}}
          currValue={sortPrice[0].title}
        />
      </div>
      <div className="collected-tab__items-list">
          {collectedItems.map((item) => (
            <ItemCard
              key={item.id}
              gameName={item.gameName}
              itemName={item.itemName}
              ratting={item.ratting}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
    </div>
  )
}

export default CollectedTab;
