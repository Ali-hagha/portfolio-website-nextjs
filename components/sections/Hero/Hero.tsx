import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  fadeAnimationVariant,
  fadeInFromBottomVariant,
} from '@/animation/variants';

const Hero = () => {
  return (
    <section className="w-full flex flex-col relative lg:flex-row items-center justify-center lg:justify-between lg:space-x-10 min-h-screen py-20 md:py-24 ">
      <motion.div
        variants={fadeInFromBottomVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="lg:flex-1 lg:w-full lg:max-w-xl"
      >
        <div className="mb-10 md:mb-12">
          <motion.h1
            variants={fadeInFromBottomVariant}
            className="text-base md:text-lg mb-4 md:mb-6 tracking-wide pt-4"
          >
            Hi, my name is
          </motion.h1>
          <motion.h2
            variants={fadeInFromBottomVariant}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-primary font-bold mb-2 sm:mb-3 md:mb-4"
          >
            Ali Haghayegh
          </motion.h2>
          <motion.h3
            variants={fadeInFromBottomVariant}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 tracking-wide"
          >
            I create robust and scalable frontend products.
          </motion.h3>
          <motion.p
            variants={fadeInFromBottomVariant}
            className="text-base md:text-lg tracking-wide max-w-lg leading-relaxed"
          >
            As a self-taught front-end developer, I have a passion for crafting
            user-friendly and engaging interfaces, and I am eager to apply my
            skills and knowledge in a professional setting.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInFromBottomVariant}
          className="flex flex-row "
        >
          <Link
            href={'mailto:ali.haghayegh@gmail.com'}
            className="rounded-lg py-3 md:py-4 px-6 md:px-12 bg-primary text-white font-medium text-lg md:text-xl mr-4 md:mr-10 hover:bg-primary-dark active:bg-primary-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Hire Me ✌️
          </Link>
          <Link
            href={'#projects'}
            scroll={false}
            className="rounded-lg py-3 md:py-4 px-6 md:px-12 font-medium text-lg md:text-xl text-primary hover:ring ring-primary active:ring ring-inset  transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            My Work
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className=" absolute self-end lg:self-auto lg:static  lg:w-4/12 xl:w-5/12 -z-50"
      >
        <div className="opacity-5 lg:opacity-100">
          <Image
            src={'/Coder.svg'}
            alt={'Programmer illustration'}
            height="450"
            width="475"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
