import { useContext, useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import ShopContainer from "../components/ShopContainer";
import TabBar from "../components/TabBar";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import Features from "../components/Features";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

const Shop = () => {
  const { products } = useContext(ShopContext);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const itemPerPage = 6;

  let filteredProducts = products.filter((product) => {

    const categoryMatch = activeTab === "All"
    || product.category === activeTab;

    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  filteredProducts = [...filteredProducts];

  if(sortBy === "price-low"){
    filteredProducts.sort((a, b) => a.price - b.price)
  }
  if(sortBy === "price-high"){
    filteredProducts.sort((a, b) => b.price - a.price)
  }
  if(sortBy === "newest"){
    filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  if(sortBy === "oldest"){
    filteredProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  if(sortBy === "az"){
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
  if(sortBy === "za"){
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  const totalPages = Math.ceil(filteredProducts.length / itemPerPage);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  useEffect(()=>{
    setCurrentPage(1);
  }, [activeTab, sortBy, search]);

  return (
    <Layout bg={`bg-[var(--secondary)]`}>
      <ShopContainer search={search} setSearch={setSearch} />
      <div className="filter-grid">
        <TabBar active={activeTab} setActive={setActiveTab} />
        <Filters sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="products-grid">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <Features bg={`bg-[var(--bg)]`}/>
    </Layout>
  );
};
export default Shop;
