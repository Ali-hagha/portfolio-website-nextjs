import DrawerNavItem from './DrawerNavItem';

const DrawerNavItemGroup = () => {
  return (
    <nav className="-mt-20">
      <ul className="flex flex-col gap-10 items-center justify-center">
        <li>
          <DrawerNavItem location={'#about'}>ABOUT</DrawerNavItem>
        </li>
        <li>
          <DrawerNavItem location={'#mywork'}>MY WORK</DrawerNavItem>
        </li>
        <li>
          <DrawerNavItem location={'#contact'}>CONTACT</DrawerNavItem>
        </li>
      </ul>
    </nav>
  );
};

export default DrawerNavItemGroup;
