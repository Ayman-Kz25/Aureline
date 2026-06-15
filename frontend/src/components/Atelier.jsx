import { useContext, useEffect, useState } from "react";
import Catalog from "./Catalog";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Atelier = () => {
  const { collection } = useContext(ShopContext);

  
  return (
    <div className="catalog">
      <div className="cat-content">
        <h2>The Atelier</h2>
      </div>

      <div className="cat-grid">
        {collection.map((item) => (
          <Catalog
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>

      <button>
        <Link to="/collection" className="btn">
          Explore now
        </Link>
      </button>
    </div>
  );
};
export default Atelier;
