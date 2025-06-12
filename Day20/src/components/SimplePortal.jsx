
import ReactDOM from 'react-dom';

const SimplePortal = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');
  return ReactDOM.createPortal(children, portalRoot);
};

export default SimplePortal;
