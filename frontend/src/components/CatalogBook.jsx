import { useContext, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { ShopContext } from "../context/ShopContext";

const CatalogBook = ({ catalog }) => {
  const { products, currency } = useContext(ShopContext);

  const [pageIndex, setPageIndex] = useState(0);

  const catalogProducts = useMemo(() => {
    if (!catalog) return [];

    return catalog.products
      .map((id) => products.find((p) => p._id === id))
      .filter(Boolean);
  }, [catalog, products]);

  const currentProduct = catalogProducts[pageIndex];

  const nextPage = () => {
    if (pageIndex < catalogProducts.length - 1) {
      setPageIndex((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  if (!currentProduct) return null;

  return (
    <div className="catalog-book">
      <div className="book-pages">
        {/* LEFT PAGE */}
        <div className="book-page left-page">
          <img
            src={currentProduct.image[0]}
            alt={currentProduct.name}
          />
        </div>

        {/* RIGHT PAGE */}
        <div className="book-page right-page">
          <span className="catalog-collection">
            {catalog.title}
          </span>

          <h2>{currentProduct.name}</h2>

          <h3>
            {currency}
            {currentProduct.price}
          </h3>

          <p>{currentProduct.description}</p>

          <div className="catalog-details">
            <div>
              <strong>Colors</strong>
              <span>
                {currentProduct.color.join(", ")}
              </span>
            </div>

            {currentProduct.sizes.length > 0 && (
              <div>
                <strong>Sizes</strong>
                <span>
                  {currentProduct.sizes.join(", ")}
                </span>
              </div>
            )}

            <div>
              <strong>Collection</strong>
              <span>{catalog.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="book-controls">
        <button
          onClick={prevPage}
          disabled={pageIndex === 0}
        >
          <ChevronLeft />
        </button>

        <span className="page-counter">
          {pageIndex + 1} / {catalogProducts.length}
        </span>

        <button
          onClick={nextPage}
          disabled={
            pageIndex === catalogProducts.length - 1
          }
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CatalogBook;