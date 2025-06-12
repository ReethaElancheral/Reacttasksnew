import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const TooltipPortal = ({ targetRef, text }) => {
  const tooltipRoot = document.getElementById('tooltip-portal-root');
  const tooltipRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY - 40,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  }, [targetRef]);

  return ReactDOM.createPortal(
    <div
      ref={tooltipRef}
      className="custom-tooltip-portal"
      style={{
        position: 'absolute',
        top: coords.top,
        left: coords.left,
        transform: 'translateX(-50%)',
        backgroundColor: '#333',
        color: '#fff',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 3000,
      }}
    >
      {text}
    </div>,
    tooltipRoot
  );
};

export default TooltipPortal;
