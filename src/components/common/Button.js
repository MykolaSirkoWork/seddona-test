const Button = ({
  text,
  onClick,
  extraClasses }) => {
  return <button className={`btn ${extraClasses}`} onClick={onClick}>{text}</button>
}
export default Button;