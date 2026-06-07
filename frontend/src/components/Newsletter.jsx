import { useContext, useState } from "react";
import Letter from "./Letter";
import { ShopContext } from "../context/ShopContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from "./Title";

const Newsletter = () => {
  const { letter } = useContext(ShopContext);

  const [index, setIndex] = useState(0);
  const total = letter?.length || 0;

  const prevLetter = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const nextLetter = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="news-letter">
      <div className="news-content">
        <Title
          title="Stories from Our Community"
          subtitle="Real experiences from people who wear Auréline pieces in their
          everyday moments."
        />
      </div>
      <div className="letter-slide">
        {letter.map((item, i) => (
          <Letter
            key={item._id}
            username={item.username}
            image={item.image}
            loc={item.loc}
            comment={item.comment}
            active={i === index}
          />
        ))}
      </div>
      <div className="letter-controls">
        <button className="prev-btn" onClick={prevLetter}>
          <ChevronLeft size={36} className="icon" />
        </button>

        <button className="next-btn" onClick={nextLetter}>
          <ChevronRight size={36} className="icon" />
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
