// Home.jsx
import { useCart } from "./CartContext";

export default function Home() {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "iPhone",
  };

  return (
    <button onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  );
}