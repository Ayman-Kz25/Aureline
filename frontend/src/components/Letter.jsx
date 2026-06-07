const Letter = ({ image, comment, username, loc, active }) => {
  return (
    <div className={`letter ${active ? "active" : ""}`}>
      <div className="letter-img">
        <img src={image} alt="" />
      </div>
      <div className="letter-content">
        <p className="text">“{comment}”</p>
        <p className="name">{username}</p>
        <p className="loc">{loc}</p>
      </div>
    </div>
  );
};
export default Letter;
