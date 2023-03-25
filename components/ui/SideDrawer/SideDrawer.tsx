import { Dispatch, Fragment, SetStateAction, useEffect } from 'react';
import DrawerMenuBtn from './DrawerMenuBtn';
import { Transition } from '@headlessui/react';
import Backdrop from './Backdrop';
import DrawerNavItemGroup from './DrawerNavItemGroup';
import DrawerNavItem from './DrawerNavItem';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';

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

  const onCLickItem = () => {
    setIsSideDrawerActive(false);
  };

  return (
    <div className="md:hidden ">
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
          <DrawerNavItemGroup>
            <DrawerNavItem onClick={onCLickItem} location={'#about'}>
              ABOUT
            </DrawerNavItem>
            <DrawerNavItem onClick={onCLickItem} location={'#projects'}>
              MY WORK
            </DrawerNavItem>
            <DrawerNavItem onClick={onCLickItem} location={'#contact'}>
              CONTACT
            </DrawerNavItem>
          </DrawerNavItemGroup>
          <div className="flex flex-row absolute bottom-10 items-center justify-center space-x-10 md:space-x-16 text-2xl text-white ">
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
        </aside>
      </Transition>
    </div>
  );
};

export default SideDrawer;
