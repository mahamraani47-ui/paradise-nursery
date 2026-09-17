import { useDispatch, useSelector } from "react-redux";
import {
increaseQuantity,
decreaseQuantity,
removeFromCart,
} from "../redux/CartSlice";

function CartItem() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

const totalAmount = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

return ( <div> <nav> <a href="/">Home</a> <a href="/plants">Plants</a> <a href="/cart">Cart 🛒</a> </nav>


  <h1>Shopping Cart</h1>

  {cartItems.map((item) => (
    <div key={item.id}>
      <img
        src={item.image}
        alt={item.name}
        width="100"
        height="100"
      />

      <h2>{item.name}</h2>

      <p>Unit Price: ${item.price}</p>

      <p>
        Total Cost: ${(item.price * item.quantity).toFixed(2)}
      </p>

      <button onClick={() => dispatch(decreaseQuantity(item.id))}>
        -
      </button>

      <span> {item.quantity} </span>

      <button onClick={() => dispatch(increaseQuantity(item.id))}>
        +
      </button>

      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Delete
      </button>
    </div>
  ))}

  <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>

  <button onClick={() => alert("Coming Soon")}>
    Checkout
  </button>

  <a href="/plants">
    <button>Continue Shopping</button>
  </a>
</div>


);
}

export default CartItem;
