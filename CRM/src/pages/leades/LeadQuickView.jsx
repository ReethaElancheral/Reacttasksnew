
// import PortalWrapper from "../../components/PortalWrapper";

// export default function LeadQuickView({ lead, onClose }) {
//   return (
//     <PortalWrapper>
//       <div className="quick-view-overlay">
//         <button onClick={onClose}>X</button>
//         <h3>{lead.name}</h3>
//         <p>{lead.email}</p>
      
//       </div>
//     </PortalWrapper>
//   );
// }


import React from 'react';
import Portal from '../../components/Portal';

export default function LeadQuickView({ lead, onClose }) {
  if (!lead) return null;

  return (
    <Portal>
      <div style={styles.overlay} onClick={onClose}>
        <div style={styles.sidebar} onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} style={styles.closeBtn}>
            × Close
          </button>
          <h2>Lead Quick View</h2>
          <p><strong>ID:</strong> {lead.id}</p>
          <p><strong>Name:</strong> {lead.name}</p>
       
        </div>
      </div>
    </Portal>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 1000,
  },
  sidebar: {
    backgroundColor: 'white',
    width: '320px',
    height: '100%',
    padding: '20px',
    boxShadow: '-3px 0 8px rgba(0,0,0,0.2)',
    overflowY: 'auto',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};
