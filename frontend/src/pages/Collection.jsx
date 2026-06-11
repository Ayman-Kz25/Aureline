import { useContext, useState } from "react";
import CollectionContainer from "../components/CollectionContainer";
import Layout from "../components/Layout";
import { ShopContext } from "../context/ShopContext";
import CatalogCard from "../components/CatalogCard";
import CatalogGrid from "../components/CatalogGrid";
import CatalogModal from "../components/CatalogModal";
import CatalogBook from "../components/CatalogBook";

const Collection = () => {
  const { catalog, products } = useContext(ShopContext);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBook = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeBook = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };
  return (
    <Layout bg="bg-[var(--secondary)]">
      <CollectionContainer />

      <CatalogGrid catalog={catalog} onOpenBook={openBook} />

      <CatalogModal isOpen={isModalOpen} onClose={closeBook}>
        <CatalogBook catalog={selectedBook} />
      </CatalogModal>
    </Layout>
  );
};
export default Collection;
