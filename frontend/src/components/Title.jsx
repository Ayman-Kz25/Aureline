const Title = ({ title, subtitle, align }) => {
  return (
    <div className={`flex flex-col gap-2 mb-3 items-start text-${align}`}>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--primary)] font-heading mb-1.5">
        {title}
      </h2>
      <p className="text-sm sm:text-base lg:text-lg opacity-80 font-normal tracking-wide font-subtitle">{subtitle}</p>
    </div>
  );
};
export default Title;
