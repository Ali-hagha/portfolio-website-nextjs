import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="w-full h-32 py-6 bg-primary flex flex-col-reverse md:flex-row justify-between items-center  px-6 sm:px-10 md:px-16 lg:px-32 ">
      <div>
        <h4 className="text-white font-extralight  text-sm md:text-base tracking-wide">
          Designed and built by Ali Haghayegh
        </h4>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center space-x-10 md:space-x-16 text-2xl text-white ">
          <Link
            href={'https://www.linkedin.com/in/ali-haghayegh-172a331a5/#'}
            className="p-2 inline-block hover:text-[#fff30a]  transition-all hover:-translate-y-1"
          >
            <FiLinkedin />
          </Link>
          <Link
            href={'https://github.com/Ali-hagha'}
            className="p-2 inline-block hover:text-[#fff30a]  transition-all hover:-translate-y-1"
          >
            <FiGithub />
          </Link>
          <Link
            href={'https://t.me/Ali_hagha'}
            className="p-2 inline-block hover:text-[#fff30a]  transition-all hover:-translate-y-1 "
          >
            <TbBrandTelegram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
