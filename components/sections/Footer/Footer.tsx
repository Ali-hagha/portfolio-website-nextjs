import SocialLinkGroup from '@/components/ui/SocialLinkGroup/SocialLinkGroup';
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
      <SocialLinkGroup />
    </footer>
  );
};

export default Footer;
