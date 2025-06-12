import ReactDOM from 'react-dom';


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
