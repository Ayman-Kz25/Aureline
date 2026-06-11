import CatalogCard from "./CatalogCard";

const CatalogGrid = ({ catalog, onOpenBook }) => {
  return (
    <div className="catalog-grid">
      {catalog.map((item) => (
        <CatalogCard
          key={item._id}
          title={item.title}
          image={item.coverImage}
          description={item.description}
          onClick={() => onOpenBook(item)}
        />
      ))}
    </div>
  );
};
export default CatalogGrid;
