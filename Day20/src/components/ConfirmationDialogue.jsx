
import ReactDOM from 'react-dom';


const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
  const portalRoot = document.getElementById('confirm-portal-root');

  return ReactDOM.createPortal(
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
        <p>{message || "Are you sure?"}</p>
        <div className="confirm-buttons">
          <button className="yes" onClick={onConfirm}>Yes</button>
          <button className="no" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default ConfirmationDialog;
