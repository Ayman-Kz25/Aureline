import { CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      {/* Hero Left */}
      <div className="hero-content">
        <p>
          Where Beauty Meets
          <br />
          Fashion & Jewelry
          <br />
          Perfectly
        </p>
        <button>
          <Link to="/shop" className="hero-btn">
            Shop now
          </Link>
        </button>
      </div>
      {/* Hero Right */}
      <div className="hero-img">
        <img
          src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780218340/Aureline/download_51_mlletj.jpg"
          alt="hero first img"
          className="hero-main-img"
        />
        <CirclePlay className="img-icon" size={48} strokeWidth={1} />
        <img
          src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780218341/Aureline/Luxury_Gold_Jewellery_That_Looks_So_Expensive_mcth8k.jpg"
          alt="hero second img"
          className="hero-accent-img"
        />
      </div>
    </div>
  );
};
export default Hero;
