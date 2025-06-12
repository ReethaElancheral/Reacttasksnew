import ReactDOM from 'react-dom';


const BubblingPortal = ({ onClick }) => {
  const portalRoot = document.getElementById('event-portal-root');

  return ReactDOM.createPortal(
    <div
      style={{
      position:'fixed',
        background: '#eee',
        padding: '20px',
        borderRadius: '8px',
        position: 'fixed',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <p>Click inside Portal (bubbles up!)</p>
    </div>,
    portalRoot
  );
};

export default BubblingPortal;
