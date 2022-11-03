import ReactDOM from 'react-dom';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close-icon.svg';

const rootNode = document.getElementById('root');
const Modal = ({
  onClose,
  extraClasses,
  title,
  children
}) => {

  return ReactDOM.createPortal(
    <div className={`modal ${extraClasses ?? ''}`} onClick={onClose}>
      <div className="modal__content">
        <div className='modal__header'>
          <h3>{title}</h3>
          <button className='close-btn' onClick={onClose}><CloseIcon /></button>
        </div>
        <div className='modal__body'>
          {children}
        </div>
      </div>
    </div>,
    rootNode
  )
}

export default Modal;