const Checkbox = ({ onChange, checked, name }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" name={name ?? 'checkbox'} checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </div>
  )
}

export default Checkbox;