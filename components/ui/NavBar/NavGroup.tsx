import Link from 'next/link';
import NavItem from './NavItem';

const NavGroup = () => {
  return (
    <div className="hidden md:block text-base">
      <ul className="flex flex-row space-x-10 mb-5">
        <li>
          <NavItem location="#about">ABOUT</NavItem>
        </li>
        <li>
          <NavItem location="#mywork">MY WORK</NavItem>
        </li>
        <li>
          <NavItem location="#contact">CONTACT</NavItem>
        </li>
      </ul>
    </div>
  );
};

export default NavGroup;
