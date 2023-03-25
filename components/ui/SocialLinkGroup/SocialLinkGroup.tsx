import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';

const SocialLinkGroup = ({ classes }: { classes?: string }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center space-x-10 md:space-x-16 text-2xl text-white ${classes}`}
    >
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
  );
};

export default SocialLinkGroup;
