import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { CartPlus } from "react-bootstrap-icons";

import Layout from "../components/Layout";
import { ShopContext } from "../context/ShopContext";

const colorMap = {
  Gold: "#e3b883",
  Ivory: "#F8F4E3",
  Black: "#111111",
  Beige: "#DCC9A3",
  Champagne: "#F7E7CE",
  Pearl: "#F5F5F0",
  Silver: "#C0C0C0",
  Emerald: "#50C878",
  Pink: "#F6C6D3",
  Tan: "#D2B48C",
  Gray: "#616569",
  Blue: "#528AAE",
  Brown: "#6F4E37",
  "Dusty Rose": "#DCA1A1",
  Burgundy: "#660033",
  Cream: "#EDE8D0",
  White: "#FFFFFF",
  "Crimson Red": "#6d131e",
  Silver: "#c4c4c4",
  Chocolate: "#713600",
  "Sage Green": "#9CAF88",
  Green: "#06402B",
  Camel: "#b2865c",
};

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = products.find(
      (item) => item._id === productId
    );

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setColor(product.color[0]);
      setSelectedSize(product.sizes?.[0] || "");
    }
  }, [productId, products]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <Layout bg={`bg-[var(--secondary)]`}>
      <section className="product-page">

        {/* LEFT SIDE */}
        <div className="product-gallery">

          <div className="product-thumbnails">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={productData.name}
                className={`thumbnail ${
                  image === item ? "active"
                  : ""
                }`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          <div className="product-main-image">
            <img
              src={image}
              alt={productData.name}
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="product-info">

          <span className="product-tag-badge">
            {productData.tag}
          </span>

          <h1>
            {productData.name}
          </h1>

          <span className="product-code">
            {productData.code}
          </span>

          <p className="product-price">
            {currency}
            {productData.price}.00
          </p>

          {/* COLORS */}
          <div className="product-section">
            <p>
              Color: <strong>{color}</strong>
            </p>

            <div className="color-options">
              {productData.color.map((item) => (
                <button
                  key={item}
                  className={`color-circle ${
                    color === item
                      ? "active"
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      colorMap[item] || "#ccc",
                  }}
                  onClick={() =>
                    setColor(item)
                  }
                />
              ))}
            </div>
          </div>

          {/* SIZES */}
          {productData.sizes.length > 0 && (
            <div className="product-section">

              <p>
                Size:
                <strong>
                  {" "}
                  {selectedSize}
                </strong>
              </p>

              <div className="size-options">
                {productData.sizes.map(
                  (item) => (
                    <button
                      key={item}
                      className={`size-btn ${
                        selectedSize === item
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedSize(item)
                      }
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

            </div>
          )}

          {/* QUANTITY */}
          <div className="product-section">

            <p>Quantity</p>

            <div className="quantity-box">

              <button
                onClick={
                  decreaseQuantity
                }
              >
                <Minus size={18} />
              </button>

              <span>
                {quantity}
              </span>

              <button
                onClick={
                  increaseQuantity
                }
              >
                <Plus size={18} />
              </button>

            </div>

          </div>

          {/* ACTIONS */}
          <div className="product-actions">

            <button className="cart-btn">
              <CartPlus size={18} />
              Add To Cart
            </button>

            <button className="buy-btn">
              Buy Now
            </button>

          </div>

        </div>

      </section>

      {/* DESCRIPTION */}
      <section className="product-description">

        <span className="product-tag">
          {productData.tag}
        </span>

        <h2>Description</h2>

        <p>
          {productData.description}
        </p>

      </section>

    </Layout>
  );
};

export default Product;