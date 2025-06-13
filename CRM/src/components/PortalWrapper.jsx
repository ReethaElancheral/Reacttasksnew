
import { createPortal } from 'react-dom';

const portalRoot = document.getElementById('portal-root');

export default function PortalWrapper({ children }) {
  return createPortal(children, portalRoot);
}
