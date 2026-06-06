import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Signature = () => {
  const { products } = useContext(ShopContext);
  const [signaturePieces, setSignaturePieces] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.signatured === true,
    );

    setSignaturePieces(filteredProducts);
  }, [products]);

  return (
    <div className="signature">
      <div className="sig-content">
        <Title
          title="Signature Pieces"
          subtitle="A curated selection of timeless fashion and jewelry essentials."
          align="left"
        />
        <button>
          <a href="/shop.html" className="btn">
            Shop now
          </a>
        </button>
      </div>
      <div className="sig-grid">
        {signaturePieces.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
};
export default Signature;
