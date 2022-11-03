import { useState } from 'react';
import itemMidImage from '../assets/images/item-medium.png';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import TextField from '../components/common/TextField';
import TransferModal from '../components/transfer-page/TransferModal';

const TransferPage = () => {
  const [address, setAddress] = useState('Ox62610ed68fd71CF2935B0c49c96299bd6525BaDC1 ');
  const [openModal, setOpenModal] = useState(false);
  const addressInputHandler = (e) => setAddress(e.target.value);
  const transferBtnHandler = () => setOpenModal(true);
  return (
    <div className="transfer-page">
      <div className="container">
        <div className="transfer-page__content">
          <h2 className="transfer-page__title">Transfer</h2>
          <div className="img-container">
            <img src={itemMidImage} alt="item img" />
          </div>
          <div className='transfer-page__info'>
            <label htmlFor='address-input'>Address</label>
            <TextField
              value={address}
              onChange={addressInputHandler}
              extraClasses="mb-20"
              id="address-input"
            />
            <p>“SuperYeti Land Quarries #2301” will be transferred to Ox62610ed68fd71CF2935B0c49c96299bd6525BaDC1 </p>
          </div>
          <Button text="transfer" extraClasses="btn--orange" onClick={transferBtnHandler} />
          {openModal && <TransferModal title="Transfer your item" onClose={() => setOpenModal(false)} />}
        </div>
      </div>
    </div>
  )
}

export default TransferPage;