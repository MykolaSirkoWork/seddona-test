import GameStats from "./GameStats";
import ItemsMenu from "./ItemsMenu";
import AboutMenu from './AboutMenu';
import DownloadBtn from "../../../common/DownloadBtn";
import twitterIcon from '../../../../assets/images/twitter-icon.svg'
import discordIcon from '../../../../assets/images/discord-icon.svg'
import webIcon from '../../../../assets/images/website-icon.svg'

const LeftBar = ({ currTab }) => {
  const leftBar = currTab === 'items' ? 'items' : 'about';
  return (
    <div className={`left-bar ${leftBar}`}>
      {currTab === 'items' && (
        <>
          <GameStats />
          <div className="filter-text">{'|< Filters'}</div>
          <ItemsMenu />
        </>
      )}
      {currTab == 'about' && (
        <>
          <h3 className="game__slogan">Let’s all blow up the yetiverse.</h3>
          <p className="game__short-desc">Yeti Bomber is an exciting MMO web3 game where players can compete, earn, and own land quarries that provide the resources to level up their game play.</p>
          <DownloadBtn />
          <ul className="social-links">
            <li><a><img src={twitterIcon} alt="twitter" /></a></li>
            <li><a><img src={discordIcon} alt="discord" /></a></li>
            <li><a><img src={webIcon} alt="web" /></a></li>
          </ul>
          <AboutMenu />
        </>
      )}
    </div>
  )
}

export default LeftBar;