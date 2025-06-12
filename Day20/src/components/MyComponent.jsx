import  { useState } from 'react';
import ReusableModal from './ReusableModal';
import withPortalWrapper from '../hoc/withPortalWrapper';

const ModalWithPortal = withPortalWrapper(ReusableModal);

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false); 

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Reusable Modal</button>

      {showModal && (
        <ModalWithPortal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default MyComponent;
