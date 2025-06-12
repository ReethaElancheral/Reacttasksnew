import { useState,useEffect,useRef } from 'react';
import './App.css'
import SimplePortal from './components/SimplePortal';
import Modal from './components/Modal';
import StyledPortal from './components/StyledPortal';
import BubblingPortal from './components/BubblingPortal';
import ClickOutsidePortal from './components/ClickOutsidePortal';
import OuterNestedPortal from './components/OuterNestedPortal';
import FormPortalModal from './components/FormPortalModal';
import FirstUniquePortal from './components/FirstUniquePortal';
import SecondUniquePortal from './components/SecondUniquePortal';
import TooltipPortal from './components/TooltipPortal';
import AnimatedPortalModal from './components/AnimatedPortalModal';
import DomRefPortal from './components/DomRefPortal';
import MyComponent from './components/MyComponent';
import ConfirmationDialog from './components/ConfirmationDialogue';
import Gallery from './components/Gallery';

function App() {
 
 const [showPortal, setShowPortal] = useState(false);
  const [showModal, setShowModal] = useState(false);
   const [isStyledPortalVisible, setIsStyledPortalVisible] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
    const [showBubblingPortal, setShowBubblingPortal] = useState(false);
     const [showOuterPortal, setShowOuterPortal] = useState(false); 
       const [showFormModal, setShowFormModal] = useState(false);

       const [showFirstPortal, setShowFirstPortal] = useState(false);
  const [showSecondPortal, setShowSecondPortal] = useState(false);

 

  const hoverTargetRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

   const [showAnimatedModal, setShowAnimatedModal] = useState(false);

     const [show, setShow] = useState(false);

      const [showConfirm, setShowConfirm] = useState(false);
  const [actionMessage, setActionMessage] = useState('');

    const handleParentClick = () => {
    alert('Parent component clicked (bubbled event)');
  };

  const handlePortalClick = () => {
    alert('Portal clicked');
    setShowBubblingPortal(false); 
  };
  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setActionMessage('Action confirmed!');
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setActionMessage('Action canceled.');
    setShowConfirm(false);
  };


  return (
    <>
    <h2>1. Introduction to Portals: Write a short explanation of what React Portals are 
and why they are used. </h2>
<p>A React Portal is a way to render a component outside the main DOM 
hierarchy while still keeping it in the React component tree. 
Definition: 
React Portals allow us to render a child component inside a different DOM node 
that exists outside the root div (#root). </p>
<p>Use:<br/>Helps with modals, tooltips, dropdowns, and popups that need to break out 
of their parent’s styles. 
Prevents CSS conflicts when dealing with z-index or overflow issues. 
Keeps event bubbling inside the React component tree.</p>
<hr/>
<h2>2. Basic Portal Setup: Create a simple portal that renders a div element 
outside the main DOM tree. </h2>
    <div>
     
      <button onClick={() => setShowPortal((prev) => !prev)}>
        {showPortal ? 'Hide' : 'Show'} Portal Content
      </button>

      {showPortal && (
        <SimplePortal>
          <div style={{ 
            position: 'fixed', 
            top: '20%', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            backgroundColor: 'lightblue', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 0 10px rgba(0,0,0,0.3)' 
          }}>
            <h2>This is rendered via Portal!</h2>
          </div>
        </SimplePortal>
      )}
    </div> 

    <h2>3. Create Portal Modal: Implement a modal dialog using React Portals. </h2>
<div style={{ padding: '20px' }}>
      <h2>React Modal</h2>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Hello from the Modal!</h2>
    
      </Modal>
    </div>
<h2>4. CSS Styling with Portals: Apply custom styles to portal elements without 
affecting the parent component. </h2>
  <div style={{ padding: '40px', backgroundColor: '#ffeaa7' }}>
      <h2 style={{ color: '#2d3436' }}>Parent Component</h2>
      <button onClick={() => setIsStyledPortalVisible(true)}>
        Show Styled Portal
      </button>

      {isStyledPortalVisible && (
        <StyledPortal onClose={() => setIsStyledPortalVisible(false)} />
      )}
    </div>
    <hr/>
    <h2>5. Event Bubbling: Demonstrate event bubbling in portals by clicking on both 
the portal component and its parent. </h2>
<div
      onClick={handleParentClick}
      style={{ height: '40vh', padding: '50px', background: '#f5f5f5' }}
    >
      <h1>Event Bubbling with React Portal</h1>
      <p>Click the portal box and see bubbling in action!</p>

      <button onClick={(e) => {
        e.stopPropagation();
        setShowBubblingPortal(true);
      }}>
        Open Bubbling Portal
      </button>

      {showBubblingPortal && (
        <BubblingPortal
          onClick={(e) => {
            e.stopPropagation(); 
            handlePortalClick();
          }}
        />
      )}
    </div>
    <hr/>
<h2>6. Portal with Click Outside Detection: Close the portal when clicking outside 
the modal. </h2>
<div style={{ padding: '20px' }}>
      <h1>Portal with Click Outside</h1>
      <button onClick={() => setIsOpen(true)}>Open Portal</button>

      <ClickOutsidePortal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>This portal closes on outside click!</h2>
        <p>Click anywhere outside this box to close it.</p>
      </ClickOutsidePortal>
    </div>
    <hr/>
    <h2>7. Nested Portals: Create a portal within another portal component. </h2>
 <div style={{ padding: '40px' }}>
      <h1>Nested React Portals Demo</h1>
      <button onClick={() => setShowOuterPortal(true)}>Open Outer Portal</button>

      {showOuterPortal && (
        <OuterNestedPortal onClose={() => setShowOuterPortal(false)} />
      )}
    </div>
    <hr/>
<h2>8. Form inside Portal: Render a form component inside a portal and handle 
form submissions. </h2>
 <div style={{ padding: '40px' }}>
      <h1>Form inside React Portal Example</h1>
      <button onClick={() => setShowFormModal(true)}>Open Form Portal</button>

      <FormPortalModal
        isVisible={showFormModal}
        onClose={() => setShowFormModal(false)}
      />
    </div>
<hr/>
<h2>9. Multiple Portals: Render two different portal components on the same 
page. </h2>
 <div style={{ padding: '40px' }}>
      <h1>Multiple Portals Demo</h1>

      <button onClick={() => {
  setShowFirstPortal(true);
  setShowSecondPortal(true);
}}>
  Open Both Portals
</button>

      {showFirstPortal && (
        <FirstUniquePortal onClose={() => setShowFirstPortal(false)} />
      )}

      {showSecondPortal && (
        <SecondUniquePortal onClose={() => setShowSecondPortal(false)} />
      )}
    </div>
<hr/>
<h2>10. Portal Tooltip: Create a tooltip that appears on hover using React Portals.</h2>

<div style={{ padding: '80px', textAlign: 'center' }}>
      <h1>React Portal Tooltip</h1>

      <button
        ref={hoverTargetRef}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        Hover me!
      </button>

      {showTooltip && (
        <TooltipPortal
          targetRef={hoverTargetRef}
          text="This is a tooltip from a portal!"
        />
      )}
    </div>
    <hr/>
<h2>11. Animation with Portals: Add CSS animations to portal components when 
they mount or unmount. </h2>
 <div style={{ padding: '80px', textAlign: 'center' }}>
      <h1>Portal with Animation</h1>

      <button onClick={() => setShowAnimatedModal(true)}>
        Open Animated Modal
      </button>

      <AnimatedPortalModal
        show={showAnimatedModal}
        onClose={() => setShowAnimatedModal(false)}
      />
    </div>
    <hr/>

    <h2>12. Accessing DOM Nodes in Portals: Use useRef to access DOM nodes inside 
portal components. </h2>
<div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>useRef Inside Portal</h2>
      <button onClick={() => setShow(true)}>Open Portal</button>

      {show && <DomRefPortal onClose={() => setShow(false)} />}
    </div>
    <hr/>
    <h2>13. Reusable Portal Component: Create a higher-order component (HOC) that 
wraps components with portal functionality.</h2>
<MyComponent/>

<hr/>

<h2>Mini Project 1: Modal Popup </h2>
<div style={{ padding: '20px' }}>
      <h2>Portal with Click Outside</h2>
      <button onClick={() => setIsOpen(true)}>Open Portal</button>

      <ClickOutsidePortal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>This portal closes on outside click!</h2>
        <p>Click anywhere outside this box to close it.</p>
      </ClickOutsidePortal>
    </div>
    <hr/>
    <h2>Mini Project 2: Tooltip Component</h2>
<div style={{ padding: '80px', textAlign: 'center' }}>
      <h1>React Portal Tooltip</h1>

      <button
        ref={hoverTargetRef}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        Hover me!
      </button>

      {showTooltip && (
        <TooltipPortal
          targetRef={hoverTargetRef}
          text="This is a tooltip from a portal!"
        />
      )}
    </div>
    <hr/>

    <h2>Mini Project 3: Confirmation Dialog</h2>
  <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Confirmation Dialog</h2>
      <button onClick={handleDeleteClick}>Delete Something</button>
      {actionMessage && <p>{actionMessage}</p>}

      {showConfirm && (
        <ConfirmationDialog
          message="Are you sure you want to delete this?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
<hr/>
<h2>Mini Project 4: Image Lightbox </h2>

<Gallery/>


    </>
  )
}

export default App
