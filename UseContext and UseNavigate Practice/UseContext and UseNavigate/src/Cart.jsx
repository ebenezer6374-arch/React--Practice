// Cart.jsx
import { useCart } from "./CartContext";

export default function Cart() {
  const { cartItems } = useCart();
//   console.log(cartItems)

  return (
    <div>
      <h1>Total Items: {cartItems.length}</h1>
    </div>
  );
}