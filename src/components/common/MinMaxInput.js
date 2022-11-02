import eth from '../../assets/images/icons/eth.svg';

const MinMaxInput = ({
  minName,
  maxName,
  minValue,
  maxValue,
  onChange
}) => {
  return (
    <div className="min-max-input">
      <img src={eth} />
        <input
          type="text"
          name={minName}
          value={minValue}
          onChange={onChange}
          placeholder="Min"
        />
        <input
          type="text"
          name={maxName}
          value={maxValue}
          onChange={onChange}
          placeholder="Max"
        />
    </div>
  )
}

export default MinMaxInput;