import { IconType } from 'react-icons/lib';

interface Props {
  icon: IconType;
  href: string;
}
const SocialLink = ({ icon: Icon, href }: Props) => {
  return (
    <a
      target="-blank"
      href={href}
      className="p-2 inline-block hover:text-secondary  transition-all hover:scale-110"
    >
      <Icon />
    </a>
  );
};

export default SocialLink;
