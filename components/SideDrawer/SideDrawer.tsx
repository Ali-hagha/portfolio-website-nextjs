import { Dispatch, SetStateAction, useEffect } from 'react';
import DrawerMenuBtn from './DrawerMenuBtn';
import DrawerNavItem from './DrawerNavItem';
import { Transition } from '@headlessui/react';

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
    <Transition
      show={isSideDrawerActive}
      enter="duration-300 transition transform"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition transform duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      unmount={false}
    >
      <div>
        <div
          className={`md:hidden inset-0 fixed bg-white/30 backdrop-blur z-10`}
          onClick={() => setIsSideDrawerActive(false)}
        ></div>
        <aside
          className={` md:hidden  w-[min(75%,384px)] bg-primary fixed top-0 bottom-0 z-20  flex flex-col items-center justify-center shadow-2xl`}
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
    </Transition>
  );
};

export default SideDrawer;
