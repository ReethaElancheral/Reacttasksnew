import  { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const FormPortalModal = ({ isVisible, onClose }) => {
  const portalRoot = document.getElementById('form-portal-root');
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef(null);

  if (!isVisible) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage(`Submitted Username: ${formData.username}, Email: ${formData.email}`);
    setFormData({ username: '', email: '' });
    
  };

  return ReactDOM.createPortal(
    <div className="form-portal-backdrop" onClick={onClose}>
      <div className="form-portal-content" onClick={(e) => e.stopPropagation()}>
        <h2>User Form</h2>
        <form ref={formRef} onSubmit={handleFormSubmit} className="form-portal-form">
          <label htmlFor="username-input">Username:</label>
          <input
            id="username-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email-input">Email:</label>
          <input
            id="email-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="form-portal-submit-btn">Submit</button>
          <button type="button" className="form-portal-close-btn" onClick={onClose}>Close</button>
        </form>

        {submitMessage && <p className="form-portal-submit-message">{submitMessage}</p>}
      </div>
    </div>,
    portalRoot
  );
};

export default FormPortalModal;
