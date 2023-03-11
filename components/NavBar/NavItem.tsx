import Link from 'next/link';

const NavItem = ({
  children,
  location,
}: {
  children: string;
  location: string;
}) => {
  return (
    <div className="relative">
      <Link
        className="p-2 hover:text-primary border-primary after:transition-transform after:absolute after:w-full after:bottom-0 after:left-0  after:h-[2px] after:bg-primary after:scale-x-0 hover:after:origin-left after:origin-right hover:after:scale-x-100"
        href={location}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavItem;
