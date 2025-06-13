import React from 'react';
import ReactDOM from 'react-dom';

export default function VideoModal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Lesson Video</h3>
        <video controls width="100%">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
