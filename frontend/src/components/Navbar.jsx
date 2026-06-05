import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  UserRound,
  ShoppingBag,
  SunMedium,
  LayoutDashboard,
  Package,
  LayoutPanelLeft,
  LogOut,
  CircleUserRound,
  Menu,
  ChevronLeft,
} from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" className="brand-name">
          Auréline
        </NavLink>
      </div>
      <div className="flex justify-between items-center">
        <div className="nav-list">
          {/* NavLinks */}
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <div className="group relative">
            <UserRound size={18} className="icon user" />
            <div className="dropdown-menu group-hover:block hidden absolute right-0 pt-4">
              <div className="dropdown-list">
                <p className="list-item">
                  <CircleUserRound size={14} />
                  Profile
                </p>
                <p className="list-item">
                  <Package size={14} /> Orders
                </p>
                <p className="list-item">
                  <LogOut size={14} />
                  Logout
                </p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <ShoppingBag size={18} className="icon" />
            <span className="cart-count">2</span>
          </Link>
          {/* <SunMedium size={18} className="icon" /> */}

          <Menu
            size={18}
            className="icon sm:hidden"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div className={`navbar-overlay ${showMenu ? "open" : ""}`}>
        <div className="nav-sidebar" onClick={() => setShowMenu(false)}>
          <div className="nav-header">
            <ChevronLeft size={18} className="icon" />
            <span>Back</span>
          </div>
          <div className="mobile-nav">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/collection"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
