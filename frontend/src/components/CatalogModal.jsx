import { X } from "lucide-react";

const CatalogModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="catalog-modal" onClick={onClose}>
      <div
        className="catalog-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="catalog-close" onClick={onClose}>
          <X size={26} />
        </button>
        {children}
      </div>
    </div>
  );
};
export default CatalogModal;
