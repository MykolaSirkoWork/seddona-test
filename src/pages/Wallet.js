import SingleAccordion from "../components/common/SingleAccordion";
import WalletActivity from "../components/wallet/WalletActivity";

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="container">
        <div className="wallet__content">
          <div className="wallet__dashboard">
            <WalletActivity />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet;