import { Dispatch, Fragment, SetStateAction, useEffect } from 'react';
import DrawerMenuBtn from './DrawerMenuBtn';
import { Transition } from '@headlessui/react';
import Backdrop from './Backdrop';
import DrawerNavItemGroup from './DrawerNavItemGroup';

type props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};

const SideDrawer = ({ isSideDrawerActive, setIsSideDrawerActive }: props) => {
  // hide overflow on body when sidedrawer is open to stop scrolling
  useEffect(() => {
    if (isSideDrawerActive) document.body.classList.add('overflow-hidden');
    if (!isSideDrawerActive) document.body.classList.remove('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSideDrawerActive]);

  return (
    <div className="md:hidden">
      <Backdrop
        isSideDrawerActive={isSideDrawerActive}
        setIsSideDrawerActive={setIsSideDrawerActive}
      />
      <Transition
        show={isSideDrawerActive}
        enter="duration-200 transition-transform"
        enterFrom="translate-x-96"
        enterTo="translate-x-0"
        leave="transition-transform duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-96"
        as={Fragment}
      >
        <aside
          className={`w-[min(75%,384px)]  bg-primary fixed top-0 right-0 bottom-0 z-20  flex flex-col items-center justify-center shadow-2xl`}
        >
          <DrawerMenuBtn
            isSideDrawerActive={isSideDrawerActive}
            setIsSideDrawerActive={setIsSideDrawerActive}
          />
          <DrawerNavItemGroup />
        </aside>
      </Transition>
    </div>
  );
};

export default SideDrawer;
