const Checkbox = ({ onChange, checked }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" checked={checked} onChange={onChange}/>
      <span className="checkmark"></span>
    </div>
  )
}

export default Checkbox;