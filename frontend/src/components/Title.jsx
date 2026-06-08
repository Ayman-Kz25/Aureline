const Title = ({ title, subtitle }) => {
  return (
    <div className={`flex flex-col gap-2 mb-3`}>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[var(--primary)] font-heading mb-1.5">
        {title}
      </h2>
      <p className="text-sm sm:text-base lg:text-lg opacity-80 font-normal tracking-wider font-subtitle">{subtitle}</p>
    </div>
  );
};
export default Title;
