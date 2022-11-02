import searchIcon from '../../assets/images/icons/search-icon-small.svg';

const SearchField = ({
  inputHandler,
  value,
  placeholder,
  submitHandler
}) => {
  return (
    <div className="search-field">
      <input
        type="text"
        className="search-input"
        onChange={inputHandler}
        value={value}
        placeholder={placeholder}
      />
      <button>
        <img src={searchIcon} onClick={submitHandler} />
      </button>
    </div>
  )
}

export default SearchField;