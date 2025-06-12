import  { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';


const DomRefPortal = ({ onClose }) => {
  const portalRoot = document.getElementById('dom-access-portal-root');
  const inputRef = useRef(null);

  useEffect(() => {
 
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return ReactDOM.createPortal(
    <div className="dom-portal-overlay" onClick={onClose}>
      <div
        className="dom-portal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Accessing DOM Node in Portal</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="I'm focused via useRef!"
        />
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    portalRoot
  );
};

export default DomRefPortal;
