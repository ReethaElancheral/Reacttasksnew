import React from 'react';
import ReactDOM from 'react-dom';


const StyledPortalBox = ({ onClose }) => {
  const portalRoot = document.getElementById('custom-styled-portal-root');

  return ReactDOM.createPortal(
    <div className="styled-portal-overlay-unique" onClick={onClose}>
      <div className="styled-portal-content-unique" onClick={(e) => e.stopPropagation()}>
        <h3>Styled Portal Box</h3>
        <p>This box is styled independently from the parent component.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    portalRoot
  );
};

export default StyledPortalBox;
