import { X } from "lucide-react";
import { useState } from "react";
import { Search } from "react-bootstrap-icons";

const Searchbar = () => {
    const [search, setSearch] = useState("");

  return (
    <div className="search-bar">
      <Search className="icon" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        placeholder="Find your fashion choice"
      />

      {search && (
        <X
          size={18}
          className="close-icon"
          onClick={() => setSearch("")}
        />
      )}
    </div>
  );
};
export default Searchbar;
