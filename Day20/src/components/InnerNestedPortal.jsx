
import ReactDOM from 'react-dom';

const InnerNestedPortal = () => {
  const innerPortalRoot = document.getElementById('inner-portal-root');

  return ReactDOM.createPortal(
    <div className="inner-portal-wrapper" style={{
      position: 'fixed',
      top: '60%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#ffd8cc',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.25)',
      zIndex: 3000,
      minWidth: '280px'
    }}>
      <h3>Inner Nested Portal</h3>
      <p>This is a nested portal inside the outer portal.</p>
    </div>,
    innerPortalRoot
  );
};

export default InnerNestedPortal;
