import { useState } from "react";

const Dropdown = ({
  data,
  onChange,
  currValue,
  extraClasses,
}) => {
  const [isActive, setIsActive] = useState(false);
  const optionHandler = (value) => {
    onChange(value)
    setIsActive(false)
  }
  return (
    <div className={`dropdown ${extraClasses ?? ''}`}>
      <div className={`dropdown__btn ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>{currValue}</div>
      {isActive && (
        <div className="dropdown__content">
        {data.map((item, idx) => (
          <div
            className="dropdown__item"
            key={idx}
            onClick={() => optionHandler(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
      )}
    </div>
    
  )
}

export default Dropdown