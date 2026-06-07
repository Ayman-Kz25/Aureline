import { Link } from "react-router-dom"

const Story = () => {
  return (
    <div className="story">
      <div className="story-content">
        <h2>Our Story</h2>
        <p>At Auréline, every collection is selected with a focus on timeless
          style,
          refined details and effortless sophistication.</p>
        <p>We believe luxury should feel personal, versatile and enduring,
          creating
          pieces that remain beautiful long after trends fade.</p>
        <button>
          <Link to="/about" className="btn">
            Learn more
          </Link>
        </button>
      </div>
      <div className="story-img">
        <img
          src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780484422/Aureline/Ivory_Gold_Eid_Anarkali___Elegant_Festive_Wear_Inspiration_h217wa.jpg"
          alt="" />
      </div>
    </div>
  )
}
export default Story