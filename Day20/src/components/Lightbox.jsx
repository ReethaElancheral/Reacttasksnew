
import ReactDOM from 'react-dom';


const Lightbox = ({ imageSrc, onClose }) => {
  const portalRoot = document.getElementById('lightbox-portal-root');

  return ReactDOM.createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>
        <img src={imageSrc} alt="Full view" className="lightbox-image" />
      </div>
    </div>,
    portalRoot
  );
};

export default Lightbox;
