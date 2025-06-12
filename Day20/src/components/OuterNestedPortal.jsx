
import ReactDOM from 'react-dom';
import InnerNestedPortal from './InnerNestedPortal';

const OuterNestedPortal = ({ onClose }) => {
  const outerPortalRoot = document.getElementById('outer-portal-root');

  return ReactDOM.createPortal(
    <div className="outer-portal-wrapper" style={{
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#ccf0ff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 0 15px rgba(0,0,0,0.3)',
      zIndex: 2000,
      minWidth: '320px'
    }}>
      <h2>Outer Portal</h2>
      <p>This is the outer portal content.</p>
      <button onClick={onClose}>Close Outer Portal</button>

    
      <InnerNestedPortal />
    </div>,
    outerPortalRoot
  );
};

export default OuterNestedPortal;
