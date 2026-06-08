import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="product-card">
      <img
        src={image[0]}
        alt=""
      />
      <h3>{name}</h3>
      <p>{currency}{price}.00</p>
    </Link>
  );
};
export default ProductCard;
