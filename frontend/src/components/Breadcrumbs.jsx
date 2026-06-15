import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ links = [] }) => {
  return (
    <div className="breadcrumbs">
      {links.map((item, index) => (
        <div key={index} className="breadcrumb-item">
          {item.path ? (
            <Link to={item.path}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}

          {index !== links.length - 1 && (
            <ChevronRight size={14} className="breadcrumb-icon" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
