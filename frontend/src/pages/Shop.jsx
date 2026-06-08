import { useContext, useState } from "react";
import Layout from "../components/Layout";
import ShopContainer from "../components/ShopContainer";
import TabBar from "../components/TabBar";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import Features from "../components/Features";

const Shop = () => {

  const { products } = useContext(ShopContext);
  const [activeTab, setActiveTab] = useState("All");
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <Layout bg={`bg-[var(--secondary)]`}>
      <ShopContainer />
      <div className="filter-grid">
        <TabBar active={activeTab} setActive={setActiveTab} />
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      <Features />
    </Layout>
  );
};
export default Shop;
