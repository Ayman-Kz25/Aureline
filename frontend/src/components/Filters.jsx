const Filters = ({ sortBy, setSortBy }) => {
  return (
    <select
      className="filters"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="">Sort Products</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="az">Name: A to Z</option>
      <option value="za">Name: Z to A</option>
    </select>
  );
};

export default Filters;