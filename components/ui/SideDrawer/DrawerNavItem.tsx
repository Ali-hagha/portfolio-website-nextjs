import Link from 'next/link';

type Props = {
  children: string;
  location: string;
  onClick: () => void;
};
const DrawerNavItem = ({ children, location, onClick }: Props) => {
  return (
    <li>
      <div className="relative">
        <Link
          href={location}
          onClick={onClick}
          scroll={false}
          className="text-white after:transition-transform after:absolute after:w-full after:bottom-0 after:left-0  after:h-[2px] after:bg-white after:scale-x-0 hover:after:origin-left after:origin-right hover:after:scale-x-100 py-3 px-4 text-lg "
        >
          {children}
        </Link>
      </div>
    </li>
  );
};

export default DrawerNavItem;
