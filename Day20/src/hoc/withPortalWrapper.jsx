
import ReactDOM from 'react-dom';

const withPortalWrapper = (WrappedComponent, portalId = 'reusable-portal-root') => {
  return function PortalHOC(props) {
    const portalRoot = document.getElementById(portalId);
    if (!portalRoot) {
      console.error(`Portal root with id "${portalId}" not found.`);
      return null;
    }

    return ReactDOM.createPortal(
      <WrappedComponent {...props} />,
      portalRoot
    );
  };
};

export default withPortalWrapper;
