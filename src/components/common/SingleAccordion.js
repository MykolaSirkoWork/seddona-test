import { useState } from "react";

const SingleAccordion = ({
  children,
  hideArrow,
  alwaysOpen,
  icon,
  title,
  hasDivider,
  extraClasses
 }) => {
  const [active, setActive] = useState(alwaysOpen);
  const toggleHandler = () => {
    if(alwaysOpen) return;
    return setActive(!active)
  };
  const headerClasses = `${active ? 'active' : ''} ${hideArrow ? 'no-arrow' : ''}`;
  const bodyClasses = `${active ? 'd-block' : ''} ${hasDivider ? 'has-divider' : ''}`;
  return (
    <div className={`single-acc ${extraClasses}`}>
      <div className={`single-acc__header ${headerClasses}`} onClick={toggleHandler}>
        <img src={icon} alt="icon" /><span>{title}</span>
      </div>
      <div className={`single-acc__body ${bodyClasses}`}>
        {children}
      </div>
    </div>
  )
}

export default SingleAccordion;