
const SortSelect = ({
  selectData,
  onChange,
  currValue
}) => {
  return (
    <label className="sort-select">
      Order by
      <select onChange={onChange} value={currValue} className={`${Boolean(currValue) ? '' : 'select-empty'}`}>
        <option value=""></option>
        {selectData.map((item) => (
          <option key={item.value} value={item.value}>{item.title}</option>
        ))}
      </select>
    </label>
  )
}

export default SortSelect;