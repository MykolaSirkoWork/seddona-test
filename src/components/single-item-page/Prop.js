const Prop = ({ name, text1, text2 }) => {
  return (
    <div className="prop">
      <h4>{name}</h4>
      <span>{text1}</span>
      <p>{text2}</p>
    </div>
  )
}

export default Prop;