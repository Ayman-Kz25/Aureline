import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer>
      <div className="ft-content">
        <div className="logo">
          <Link to="/">Auréline.</Link>
        </div>
        <div className="ft-nav-link">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/collections">Collections</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h4>Stay Inspired</h4>
          <p>
            Receive updates on new arrivals, exclusive collections and seasonal
            style stories.
          </p>

          <div className="input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="ft-links">
        <div>&copy; 2026 Auréline. Brand, Inc.</div>
        <div className="social">
          <Twitter size={18} className="icon" />
          <Facebook size={18} className="icon" />
          <Linkedin size={18} className="icon" />
          <Youtube size={18} className="icon" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
