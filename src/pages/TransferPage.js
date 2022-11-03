import itemMidImage from '../assets/images/item-medium.png';
import Modal from '../components/common/Modal';

const TransferPage = () => {
  return (
    <div className="transfer-page">
      <div className="container">
        <div className="transfer-page__content">
          <Modal title="Transfer your item" />
        </div>
      </div>
    </div>
  )
}

export default TransferPage;