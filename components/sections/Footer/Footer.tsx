import SocialLinkGroup from '@/components/ui/SocialLinkGroup/SocialLinkGroup';

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-primary flex flex-col-reverse md:flex-row justify-between items-center  px-6 sm:px-10 md:px-16 lg:px-32 ">
      <div className="mt-10 md:mt-0">
        <a
          target="_blank"
          href="https://github.com/Ali-hagha"
          className="text-white font-medium text-xs md:text-sm tracking-wide hover:text-secondary transition-colors"
        >
          Designed and built by Ali Haghayegh
        </a>
      </div>
      <SocialLinkGroup />
    </footer>
  );
};

export default Footer;
