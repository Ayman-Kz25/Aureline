import { Link } from "react-router-dom";

const Catalog = ({ id, image, name }) => {
  return (
    <Link to={`/collection/`} className="cat-item">
      <div className="cat-img">
        <img src={image[0]} alt="" />
        <p>{name}</p>
      </div>
    </Link>
  );
};
export default Catalog;
