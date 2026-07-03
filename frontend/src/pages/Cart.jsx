import { Minus, Plus, Trash2 } from "lucide-react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cartItems, products, currency, removeFromCart } =
    useContext(ShopContext);

  const [cartItem, setCartItems] = useState(cartItems);

  const cartProducts = products.filter((product) => cartItem[product._id]);

  const subtotal = cartProducts.reduce(
    (total, item) => total + item.price * cartItem[item._id].quantity,
    0,
  );

  const updateQuantity = (productId, quantity) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };

      if (quantity <= 0) {
        delete updatedCart[productId];
      } else {
        updatedCart[productId] = {
          ...updatedCart[productId],
          quantity,
        };
      }

      return updatedCart;
    });
  };

  return (
    <Layout bg="bg-[var(--secondary)]">
      <section className="cart-container">
        {/* LEFT */}

        <div className="cart-items">
          <div className="cart-heading">
            <h1>Shopping Cart</h1>
            <span>{cartProducts.length} Items</span>
          </div>
          {cartProducts.map((item) => (
            <div className="cart-item" key={item._id}>
              <div className="cart-image">
                <img src={item.image[0]} alt={item.name} />
              </div>

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p className="cart-code">Code: {item.code}</p>

                <p className="cart-price">
                  {currency}
                  {item.price}
                </p>

                <div className="cart-options">
                  <span>{cartItem[item._id].color}</span>

                  {cartItem[item._id].size && (
                    <span>{cartItem[item._id].size}</span>
                  )}
                </div>
              </div>

              <div className="cart-actions">
                <button
                  className="counter"
                  onClick={() =>
                    updateQuantity(item._id, cartItem[item._id].quantity - 1)
                  }
                >
                  <Minus size={16} />
                </button>

                <span>{cartItem[item._id].quantity}</span>

                <button
                  className="counter"
                  onClick={() =>
                    updateQuantity(item._id, cartItem[item._id].quantity + 1)
                  }
                >
                  <Plus size={16} />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              {currency} {subtotal}
            </span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>
              {currency} {(subtotal * 0.05).toFixed(2)}
            </span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>
              {currency} {(subtotal * 1.05).toFixed(2)}
            </span>
          </div>

          <Link to="checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </aside>
      </section>
    </Layout>
  );
};

export default Cart;
