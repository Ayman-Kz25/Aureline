import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const getPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  return (
    <div className="pagination">
      <span
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      >
        <ChevronLeft size={20} className="icon left"/>
      </span>

      {getPages().map((p, i) =>
        p === "..." ? (
          <span key={i} className="dots">...</span>
        ) : (
          <button
            key={i}
            onClick={() => setCurrentPage(p)}
            className={currentPage === p ? "active" : ""}
          >
            {p}
          </button>
        )
      )}

      <span
        onClick={() =>
          setCurrentPage((p) => Math.min(p + 1, totalPages))
        }
      >
        <ChevronRight size={20} className="icon right" />
      </span>
    </div>
  );
};

export default Pagination;