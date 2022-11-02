import twitterIcon from '../../assets/images/icons/twitter-icon.svg';
import discordIcon from '../../assets/images/icons/discord-icon.svg';
import footerLogo from '../../assets/images/footer-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container d-flex f-ji-sb f-ai-c">
        <div className="footer__logo-container">
          <img src={footerLogo} alt="ompany logo" />
          <p className="footer__rights">&copy; Seddona 2022</p>
        </div>
        <div className="footer__links">
          <ul className="footer__nav-links">
            <li><a href="/">About</a></li>
            <li><a href="/">Support</a></li>
          </ul>
          <ul className="footer__social-links">
            <li><a href="/"><img src={twitterIcon} alt="twitter icon"/></a></li>
            <li><a href="/"><img src={discordIcon} alt="discord icon"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;