
import ReactDOM from 'react-dom';

const FirstUniquePortal = ({ onClose }) => {
  const portalRootOne = document.getElementById('portal-root-one');

  return ReactDOM.createPortal(
    <div
      className="first-portal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(255, 230, 230, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1500,
      }}
    >
      <div
        className="first-portal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffcccc',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(255, 0, 0, 0.4)',
          minWidth: '300px',
          textAlign: 'center',
        }}
      >
        <h2>First Portal</h2>
        <p>This is the first portal content.</p>
        <button onClick={onClose}>Close First Portal</button>
      </div>
    </div>,
    portalRootOne
  );
};

export default FirstUniquePortal;
