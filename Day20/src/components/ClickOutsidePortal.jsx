import  { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
const ClickOutsidePortal = ({ isOpen, onClose, children }) => {
  const portalRef = useRef(null);
  const portalRoot = document.getElementById('outside-portal-root');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (portalRef.current && !portalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="click-portal-backdrop">
      <div ref={portalRef} className="click-portal-box">
        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default ClickOutsidePortal;
