const Contact = () => {
  return (
    <section id="contact" className="mb-36">
      <div className='flex flex-col items-center justify-center py-24 w-full relative before:absolute before:-z-50 before:top-0 before:left-0   before:w-full before:h-full before:bg-[url("/arrows.svg")] before:bg-no-repeat before:bg-contain before:bg-center before:drop-shadow-[5px_5px_0px_rgba(28,53,53,1)] before:hidden md:before:block'>
        <h2 className=" font-light text-base md:text-lg tracking-wide mb-4 text-center">
          Like what you see?
        </h2>
        <h2 className="text-primary font-semibold text-3xl mb-6 text-center">
          Send me a message!
        </h2>
        <p className="text-base md:text-lg tracking-wide max-w-lg leading-relaxed mb-10 text-center">
          Are you are interested in hiring me or have any questions about my
          work? Go ahead.
        </p>
        <div className='flex flex-col items-center justify-center before:py-16  w-96  relative before:absolute before:-z-50 before:-top-[calc(64px-22px)] before:left-0   before:w-full before:h-full before:bg-[url("/arrows.svg")] before:bg-no-repeat before:bg-contain before:bg-center before:drop-shadow-[5px_5px_0px_rgba(28,53,53,1)] before:block md:before:hidden'>
          <button className="rounded-lg py-2 md:py-3 px-4 md:px-10 bg-primary text-white font-medium text-lg md:text-xl hover:bg-primary-dark active:bg-primary-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Say Hello 👋
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
