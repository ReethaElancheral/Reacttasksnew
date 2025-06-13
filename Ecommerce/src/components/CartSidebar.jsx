import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { CartContext } from '../pages/CartContext';

function CartSidebar({ onClose }) {
  const { cart, removeFromCart } = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className="cart-sidebar">
      <button onClick={onClose}>Close</button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.title} x {item.qty}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>,
    document.getElementById('portal-root')
  );
}
export default CartSidebar;

