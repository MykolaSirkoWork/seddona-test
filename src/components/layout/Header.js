
import searctIcon from '../../assets/images/icons/search-icon.svg';
import wallerIcon from '../../assets/images/icons/wallet-icon.svg';
import profileIcon from '../../assets/images/icons/profile-icon.svg';
import mainLogo from '../../assets/images/main-logo.png';

const links = [
  { path: '/games', label: 'GAMES' },
  { path: '/items', label: 'ITEMS' },
  { path: '/download', label: 'DOWNLOAD' },
]

const Header = () => {
  return (
    <div className="header container">
      <div className="header__company-logo">
        <a href="/"><img src={mainLogo} /></a>
      </div>
      <div className="d-flex">
        <nav className="d-flex f-ai-c">
          <ul className="nav-links">
            {links.map(link => (
              <li key={link.label}>
                <a
                  className={`${link.label === 'DOWNLOAD' ? 'download-link' : ''}`}
                  href={link.path}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__manage-btns">
          <button className="search-btn">
            <img src={searctIcon} />
          </button>
          <div className="icon-link">
            <a href="/"><img src={profileIcon} /></a>
          </div>
          <div className="icon-link">
            <a href="/"><img src={wallerIcon} /></a>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Header;