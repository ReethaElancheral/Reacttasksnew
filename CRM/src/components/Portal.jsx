import React from 'react';
import ReactDOM from 'react-dom';

export default function Portal({ children }) {
  const portalRoot = document.getElementById('portal-root');
  return ReactDOM.createPortal(children, portalRoot);
}
