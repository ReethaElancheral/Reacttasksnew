import  { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


const AnimatedPortalModal = ({ show, onClose }) => {
  const portalRoot = document.getElementById('animated-portal-root');
  const nodeRef = useRef(null); 

  const modalContent = (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="fade-portal"
      unmountOnExit
      nodeRef={nodeRef} 
    >
      <div
        ref={nodeRef} 
        className="animated-modal-overlay"
        onClick={onClose}
      >
        <div
          className="animated-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Animated Portal Modal</h2>
          <p>This modal fades in and out!</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </CSSTransition>
  );

  return ReactDOM.createPortal(modalContent, portalRoot);
};

export default AnimatedPortalModal;
