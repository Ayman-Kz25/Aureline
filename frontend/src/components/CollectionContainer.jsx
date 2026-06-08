import Title from "./Title";

const CollectionContainer = () => {
  return (
    <div className="col-container">
      <div className="flex flex-col gap-2 my-5">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[var(--primary)] font-heading mt-3">
          Collection
        </h2>
        <p className="text-sm sm:text-base lg:text-lg opacity-80 font-normal tracking-wider font-[Manrope] w-full md:w-[70%] mx-auto py-2 leading-9">
          A curated selection designed with timeless style, refined detail, and effortless sophistication. Each piece is chosen to reflect a sense of modern elegance that feels personal and lasting.
        </p>
      </div>
    </div>
  );
};
export default CollectionContainer;
