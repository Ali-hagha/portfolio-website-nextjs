import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import SocialLink from './SocialLink';

const SocialLinkGroup = ({ classes }: { classes?: string }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center space-x-8 md:space-x-16 text-2xl text-white ${classes}`}
    >
      <SocialLink
        icon={FiLinkedin}
        href={'https://www.linkedin.com/in/ali-haghayegh-172a331a5/#'}
      />
      <SocialLink icon={FiGithub} href={'https://github.com/Ali-hagha'} />
      <SocialLink icon={TbBrandTelegram} href={'https://t.me/Ali_hagha'} />
      <SocialLink icon={FiMail} href={'mailto:ali.haghayegh@gmail.com'} />
      <SocialLink icon={FiPhone} href={'tel:+989144160848'} />
    </div>
  );
};

export default SocialLinkGroup;
