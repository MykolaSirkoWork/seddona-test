import Modal from "../common/Modal"

const TransferModal = ({
  onClose
}) => {
  return (
    <Modal title="Transfer your item" onClose={onClose}>
      <div className="transfer-modal">
        <h3>Go to your wallet</h3>
        <p>You'll be asked to approve this transfer from your wallet</p>
      </div>
    </Modal>
  )
}

export default TransferModal;