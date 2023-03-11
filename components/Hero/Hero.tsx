const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center content-center space-x-10">
      <div className="flex-1 sm:mx-0 md:w-8/12 lg:w-7/12 max-w-xl">
        <div className="mb-10 md:mb-12">
          <h1 className="text-base md:text-lg mb-4 md:mb-6 tracking-wide">
            Hi, my name is
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold mb-2 sm:mb-3 md:mb-4">
            Ali Haghayegh
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 tracking-wide">
            I create robust and scalable frontend products.
          </h3>
          <p className="text-base md:text-lg tracking-wide max-w-lg leading-relaxed">
            As a self-taught front-end developer, I have a passion for crafting
            user-friendly and engaging interfaces, and I am eager to apply my
            skills and knowledge in a professional setting.
          </p>
        </div>
        <div className="flex flex-row ">
          <button className="rounded-lg py-3 md:py-4 px-6 md:px-12 bg-primary text-white font-medium text-lg md:text-xl mr-4 md:mr-10 hover:bg-primary-dark active:bg-primary-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Hire Me ✌️
          </button>
          <button className="rounded-lg py-3 md:py-4 px-6 md:px-12 font-medium text-lg md:text-xl text-primary hover:ring ring-primary active:ring ring-inset  transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            My Work
          </button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
