import GameStats from "./GameStats";
import ItemsMenu from "./ItemsMenu";
import AboutMenu from './AboutMenu';
import DownloadBtn from "../../../common/DownloadBtn";
import twitterIcon from '../../../../assets/images/icons/twitter-icon.svg'
import discordIcon from '../../../../assets/images/icons/discord-icon.svg'
import webIcon from '../../../../assets/images/icons/website-icon.svg'
import GamePreview from "../../../common/GamePreview";
import { ReactComponent as FilterIcon } from '../../../../assets/images/icons/filter-icon.svg'
import ActivityMenu from "./ActivityMenu";

const LeftBar = ({ currTab }) => {
  return (
    <div className={`left-bar ${currTab}`}>
      <GamePreview gameName="Yeti Bomber" createdBy="SuperYeti" extraClasses="mb-38" />
      {currTab === 'items' && (
        <>
          <GameStats />
          <div className="filter-text">
            <FilterIcon className="mr-6"/>
            Filters
          </div>
          <ItemsMenu />
        </>
      )}
      {currTab === 'about' && (
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
      {currTab === 'activity' && (
        <>
          <GameStats />
          <div className="filter-text">
            <FilterIcon className="mr-6"/>
            Filters
          </div>
          <ActivityMenu />
        </>
      )}
    </div>
  )
}

export default LeftBar;