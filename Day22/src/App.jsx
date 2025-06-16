import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions/counterActions";
import { addUser } from "./actions/userActions";
import { likePost, dislikePost } from "./actions/postActions";

import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "./actions/cartActions";

import { addNote, deleteNote } from "./actions/noteActions";
import UserRegistration from "./components/UserRegistration";

function App() {
  const posts = useSelector((state) => state.postState.posts);

  const users = useSelector((state) => state.userState.users);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const cart = useSelector((state) => state.cartState.cart);

  const [text, setText] = useState("");
  const notes = useSelector((state) => state.noteState.notes);
  const handleAddNotes = () => {
    if (text.trim()) {
      dispatch(addNote(text));
      setText("");
    }
  };

  const handleAdd = (product) => dispatch(addToCart(product));
  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleChangeQty = (id, qty) =>
    dispatch(updateQuantity(id, Number(qty)));

  const [name, setName] = useState("");
  const handleAddUser = () => {
    if (name.trim()) {
      dispatch(addUser({ name }));
      alert("User added!");
      setName("");
      setEmail("");
    }
  };

  const sampleProducts = [
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Orange", price: 15 },
  ];

  return (
    <>
      <h2>
        1. Introduction to Actions and Reducers: Write a short explanation of
        what actions and reducers are in Redux.{" "}
      </h2>
      <p>
        {" "}
        <strong>Actions </strong>
        <br />
        Actions are plain JavaScript objects that represent what type of event
        is happening in your application. They tell Redux what you want to do.
      </p>
      <p>
        <strong>Reducers </strong>
        A reducer is a function that takes the current state and an action as
        arguments and returns a new state. <br />
        <strong>Definition:</strong> <br />
        A reducer is a pure function that updates the application state based on
        the action type.
        <br />
      </p>

      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>+ Increment</button>
        <button onClick={() => dispatch(decrement())}>- Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px", display: "block" }}
        />
        <button onClick={handleAddUser} style={{ padding: "10px" }}>
          Add User
        </button>
        <h3 style={{ marginTop: "2rem" }}>Registered Users</h3>
        {users.length === 0 ? (
          <p>No users added yet.</p>
        ) : (
          <ul style={{ paddingLeft: "1rem" }}>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
      <hr />
      <h2>Mini Project 1: Shopping Cart </h2>
      <div>
        <h2>🛍 Products</h2>
        {sampleProducts.map((product) => (
          <div className="product" key={product.id}>
            <span>
              {product.name} - ₹{product.price}
            </span>
            <button onClick={() => handleAdd(product)}>Add to Cart</button>
          </div>
        ))}

        <h2>🛒 Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>
                {item.name} - ₹{item.price} x{" "}
              </span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleChangeQty(item.id, e.target.value)}
                min="1"
              />
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <h2>Mini Project 2: Simple Note App </h2>
      <div className="container">
        <h2>📝 Note App</h2>
        <div className="note-input">
          <input
            type="text"
            placeholder="Enter a note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleAddNotes}>Add Note</button>
        </div>

        <ul className="note-list">
          {notes.map((note) => (
            <li key={note.id}>
              {note.text}
              <button onClick={() => dispatch(deleteNote(note.id))}>❌</button>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <h2>Mini Project 3: User Registration </h2>
      <UserRegistration />
      <hr />
      <h2>Mini Project 4: Like/Dislike System</h2>
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h2>📢 Like / Dislike System</h2>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3>{post.title}</h3>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => dispatch(likePost(post.id))}>
                👍 Like
              </button>
              <button onClick={() => dispatch(dislikePost(post.id))}>
                👎 Dislike
              </button>
            </div>
            <p>
              Likes: {post.likes} | Dislikes: {post.dislikes}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
