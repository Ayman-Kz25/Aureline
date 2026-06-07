import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Slide from "./Slide";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Archive = () => {
  const { slide } = useContext(ShopContext);
  const [index, setIndex] = useState(0);

  const total = slide?.length || 0;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!total) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 7000);
  }, [total]);

  return (
    <div className="archive">
      <div className="arc-left">
        <div className="arc-carousel">
          {slide?.map((item, i) => {
            let className = "slide";

            if (i === index) className += " active";
            else if (i === (index - 1 + total) % total) className += " prev";
            else if (i === (index + 1) % total) className += " next";

            return (
              <Slide key={item._id} image={item.image} className={className} />
            );
          })}
        </div>
        <div className="carousel-btns">
          <button className="prev-btn" onClick={prevSlide}>
            <CircleArrowLeft size={28} className="icon" />
          </button>
          <button className="next-btn" onClick={nextSlide}>
            <CircleArrowRight size={28} className="icon" />
          </button>
        </div>
      </div>
      <div className="arc-content">
        <Title
          title="Fashion Archive"
          subtitle="A collection of timeless fashion and jewelry pieces"
          align="left"
        />
        <button>
          <Link to="/shop" className="btn">
            View more
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Archive;
