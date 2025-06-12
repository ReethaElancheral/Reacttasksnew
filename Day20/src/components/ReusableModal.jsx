

const ReusableModal = ({ onClose }) => {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        <h3>Reusable Portal Modal</h3>
        <p>This modal is rendered via a portal HOC.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  content: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '10px',
    minWidth: '300px',
    textAlign: 'center',
  }
};

export default ReusableModal;
