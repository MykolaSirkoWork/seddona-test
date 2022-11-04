import { ReactComponent as EthIcon } from "../../assets/images/icons/eth.svg";
import { ReactComponent as SendIcon } from "../../assets/images/icons/send-icon.svg";
import { ReactComponent as SendContainedIcon } from "../../assets/images/icons/send-contained-icon.svg";
import { ReactComponent as SwapContainedIcon } from "../../assets/images/icons/swap-contained-icon.svg";
import { ReactComponent as DownloadIcon } from "../../assets/images/icons/download-icon.svg";

const WalletActivity = () => {
  return (
    <div className="wallet-activity">
      <div className="wallet-activity__header">
        <h3>Account 1</h3>
      </div>
      <div className="wallet-activity__body">
        <div className="main-info">
          <div className="main-info__values">
            <EthIcon />
            <p>
              <span className="main-info__points">0.011</span>
              <span className="main-info__dolars">$1.68</span>
            </p>
          </div>
          <div className="main-info__buttons">
            <button className="main-info__btn btn-icon">
              <SendContainedIcon />
              Send
            </button>
            <button className="main-info__btn btn-icon">
              <SendContainedIcon />
              Send
            </button>
          </div>
        </div>
        <div className="interactions">
          <div className="interactions__title">Activity</div>
          <div className="interactions__content">
            <Interaction
              icon={<SendIcon />}
              date="Feb 2"
              intName="Send"
              to="0xf29...fa03"
              pointValue="-0.02885843"
              dolarsValue="-$45.60"
            />
            <Interaction
              icon={<DownloadIcon />}
              date="Feb 2"
              intName="Receive"
              to="0xf29...fa03"
              pointValue="0.02885843"
              dolarsValue="$45.60"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletActivity;

const Interaction = ({ icon, date, intName, to, pointValue, dolarsValue }) => {
  return (
    <div className="int-item">
      <div className="int-item__info">
        <div className="d-flex f-ai-c">
          {icon}
          <div className="ml-24">
            <p className="int-item__name">{intName}</p>
            <div>
              <span className="int-item__date">{date}</span>
              <span className="int-item__to">To: {to}</span>
            </div>
          </div>
        </div>
        <div className="int-item__values">
          <div className="int-item__points">
            <EthIcon />
            {pointValue}
          </div>
          <p className="int-item__dolars">{dolarsValue}</p>
        </div>
      </div>
    </div>
  )
}