const CatalogCard = ({ title, image, description, onClick }) => {
  return (
    <div className="catalog-card" onClick={onClick}>
      <div className="catalog-cover">
        <img src={image} alt={title} />

        <div className="catalog-overlay">
          <h3>{title}</h3>
          <span>{new Date().getFullYear()} Edition</span>
        </div>
        <div className="catalog-spine"></div>
      </div>
    </div>
  );
};
export default CatalogCard;
