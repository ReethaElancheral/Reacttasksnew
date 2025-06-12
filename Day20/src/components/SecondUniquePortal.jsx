
import ReactDOM from 'react-dom';

const SecondUniquePortal = ({ onClose }) => {
  const portalRootTwo = document.getElementById('portal-root-two');

  return ReactDOM.createPortal(
    <div
      className="second-portal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: '10%',
        left: '10%',
        backgroundColor: 'rgba(230, 230, 255, 0.9)',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,255,0.4)',
        zIndex: 1600,
        minWidth: '280px',
      }}
    >
      <h2>Second Portal</h2>
      <p>This is the second portal content.</p>
      <button onClick={onClose}>Close Second Portal</button>
    </div>,
    portalRootTwo
  );
};

export default SecondUniquePortal;
