const Slide = ({ image, className }) => {
  return (
    <div className={className}>
      <img src={image} alt="" />
    </div>
  );
};

export default Slide;