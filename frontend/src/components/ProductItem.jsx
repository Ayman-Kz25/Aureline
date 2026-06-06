import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, tag, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="product-item">
      <img
        src={image[0]}
        alt=""
      />
      <span className="tag exclusive">{tag}</span>
      <h3>{name}</h3>
      <p>{currency}{price}</p>
    </Link>
  );
};
export default ProductItem;
