const TextField = ({
  value,
  onChange,
  type,
  extraClasses,
  id
}) => {
  return (
    <input
      id={id ?? ''}
      className={`text-field ${extraClasses ?? ''}`}
      onChange={onChange}
      value={value}
      type={type ? type : 'text'}
    />
  )
}
export default TextField;