const Checkbox = ({ onChange, checked }) => {
  return (
    <label class="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span class="slider"></span>
    </label>
  )
}

export default Checkbox;