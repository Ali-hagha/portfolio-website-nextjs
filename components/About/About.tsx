import Image from 'next/image';
import { TbDiamondsFilled } from 'react-icons/tb';

const About = () => {
  return (
    <section
      id="about"
      className="mb-24 flex flex-col lg:flex-row items-center h-full"
    >
      <div className="flex flex-col relative h-56 sm:h-80 lg:h-auto  w-screen  items-center justify-center mb-4 md:mb-8 lg:mb-0 lg:mr-8 lg:flex-1 lg:self-stretch">
        <div className="flex flex-col items-center justify-center lg:self-stretch">
          <h2 className="text-3xl font-bold">About Me</h2>
          <Image
            src={'/about underline.svg'}
            alt={'underline'}
            width="160"
            height="200"
          />
        </div>
        <Image
          src={'/about flash art.svg'}
          alt={'flash'}
          width="1024"
          height="1024"
          className="absolute right-0 left-0 scale-75 lg:scale-90 -z-40"
        />
        <div className='bg-[url("/organic-pattern.svg")] absolute top-0 bottom-0 left-0 right-0 -z-50 bg-cover'></div>
      </div>
      <div>
        <div className="text-base md:text-lg tracking-wide max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-2xl leading-relaxed mb-4">
          <p>
            Hi there! My name is Ali, and I am an ambitious new developer on the
            lookout for exciting job opportunities in front-end development. I
            am deeply committed to continuous learning and refining my skills in
            creating responsive and dynamic user interfaces. Having already
            built several web applications, I am eager to take on new challenges
            and contribute to innovative projects.
          </p>
          <p>
            In addition to my expertise in front-end development, I have honed
            my skills in mobile application development, allowing me to deliver
            intuitive and engaging user experiences across multiple platforms.
          </p>
          <p>
            These are some of the latest technologies I have been working with:
          </p>
        </div>
        <ul className="columns-2 text-sm md:text-base">
          <li>
            <TbDiamondsFilled className="inline-block mr-1 text-primary" />
            Javascript (ES6+)
          </li>
          <li>
            <TbDiamondsFilled className="inline-block mr-1 text-primary" />
            React
          </li>
          <li>
            <TbDiamondsFilled className="inline-block mr-1 text-primary" />
            Tailwind
          </li>
          <li>
            <TbDiamondsFilled className="inline-block mr-1 text-primary" />
            Typescript
          </li>
          <li>
            <TbDiamondsFilled className="inline-block mr-1 text-primary" />
            Next.js
          </li>
          <li>
            <TbDiamondsFilled className="inline-block mr-1 text-primary" />
            React Native
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
