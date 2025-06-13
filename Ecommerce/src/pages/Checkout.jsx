import { useContext } from 'react';
import { CartContext } from './CartContext';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <form onSubmit={(e) => { e.preventDefault(); alert('Order Placed!'); clearCart(); }}>
      <h2>Checkout</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title} x {item.qty}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <button type="submit">Place Order</button>
    </form>
  );
}
export default Checkout;