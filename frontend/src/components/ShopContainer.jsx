import Searchbar from "./Searchbar";

const ShopContainer = ({ search, setSearch }) => {
  return (
    <div className="shop-container">
      <h1>Our Products</h1>
      <Searchbar search={search} setSearch={setSearch} />
    </div>
  );
};
export default ShopContainer;
