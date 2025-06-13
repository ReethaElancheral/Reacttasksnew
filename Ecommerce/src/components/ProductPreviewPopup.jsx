
import ReactDOM from 'react-dom';

function ProductPreviewPopup({ product, onClose }) {
  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}

export default ProductPreviewPopup;