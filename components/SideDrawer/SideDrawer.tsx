import { Dispatch, SetStateAction, useEffect } from 'react';
import DrawerMenuBtn from './DrawerMenuBtn';
import DrawerNavItem from './DrawerNavItem';

type props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};

const SideDrawer = ({ isSideDrawerActive, setIsSideDrawerActive }: props) => {
  useEffect(() => {
    if (isSideDrawerActive) document.body.classList.add('overflow-hidden');
    if (!isSideDrawerActive) document.body.classList.remove('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSideDrawerActive]);

  return (
    <div className="ease-out duration-200">
      <div
        className={`${
          isSideDrawerActive ? 'opacity-100 block' : 'opacity-0 hidden'
        } md:hidden inset-0 fixed bg-white/30 backdrop-blur transition-opacity z-10`}
        onClick={() => setIsSideDrawerActive(false)}
      ></div>
      <aside
        className={`${
          isSideDrawerActive ? 'translate-x-0' : 'translate-x-96'
        } md:hidden  w-[min(75%,384px)] bg-primary fixed top-0 right-0 bottom-0 transition-transform z-20  flex flex-col items-center justify-center shadow-2xl`}
      >
        <DrawerMenuBtn
          isSideDrawerActive={isSideDrawerActive}
          setIsSideDrawerActive={setIsSideDrawerActive}
        />
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
      </aside>
    </div>
  );
};

export default SideDrawer;
