import { BriefcaseBusiness, MessageCircleHeart, Truck } from "lucide-react";

const Features = ({ bg }) => {
  return (
    <div className={bg}>
      <div className="features-grid">
        <div className="feature1">
          <Truck size={40} strokeWidth={1} className="icon" />
          <h3>Delivery</h3>
          <p>Enjoy seamless delivery on every order worldwide.</p>
        </div>
        <div className="feature2">
          <MessageCircleHeart size={40} strokeWidth={1} className="icon" />
          <h3>Customer Care</h3>
          <p>Expert assistance whenever you need guidance or help.</p>
        </div>
        <div className="feature3">
          <BriefcaseBusiness size={40} strokeWidth={1} className="icon" />
          <h3>Payment Security</h3>
          <p>Shop confidently with safe and reliable transactions.</p>
        </div>
      </div>
    </div>
  );
};
export default Features;
