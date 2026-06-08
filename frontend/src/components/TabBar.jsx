import { useState } from "react";
const tabs = [
  { name: "All" },
  { name: "Jewelry" },
  { name: "Bag" },
  { name: "Dress" },
  { name: "Scarf" },
  { name: "Heels" },
  { name: "Accessories" },
];

const Tabbar = ({ active, setActive }) => {
  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          name={tab.name}
          active={active === name}
          onClick={() => setActive(tab.name)}
          className={`tab ${active === tab.name ? "active" : ""}`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
export default Tabbar;
