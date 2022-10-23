import { useState } from "react";
import SearchField from "../../../common/SearchField";
import SortSelect from "../../../common/SortSelect";
import ItemCard from "./ItemCard";
import { items } from "../../../../data";

const selectData = [
  { title: 'Key 1', value: 'key1' },
  { title: 'Key 2', value: 'key2' },
  { title: 'Key 3', value: 'key3' },
]
const ItemsTab = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  const sortByHandler = (e) => setSortBy(e.target.value);

  const searchHandler = (e) => setSearch(e.target.value);
  const submitHandler = () => console.log('submit');
  return (
    <div className="items-tab">
      <div className="items-tab__header">
        <SearchField
          value={search}
          inputHandler={searchHandler}
          submitHandler={submitHandler}
          placeholder="Search Items, Attributes"
        />
        <SortSelect
          selectData={selectData}
          onChange={sortByHandler}
          currValue={sortBy}
        />
      </div>
      <div className="items-tab__items-list">
        {items.map((item) => (
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

export default ItemsTab;