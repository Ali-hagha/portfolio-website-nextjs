import useNavbarVisibility from '@/hooks/useNavBarVisibility/useNavBarVisibility';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import MenuBtn from './MenuBtn';
import NavGroup from './NavGroup';
import { cn } from '@/lib/utils';
import clsx from 'clsx';

type props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};

const NavBar = ({ isSideDrawerActive, setIsSideDrawerActive }: props) => {
  const [visible, isScrolled] = useNavbarVisibility();

  return (
    <Transition
      show={visible}
      enter="transition duration-150"
      enterFrom="-translate-y-full"
      enterTo="translate-y-0"
      leave="transition duration-150"
      leaveTo="-translate-y-full"
      leaveFrom="translate-y-0"
      unmount={false}
      as={Fragment}
    >
      <header
        className={`fixed z-10 top-0 left-0 right-0 mx-auto bg-white/60 backdrop-blur-xl`}
      >
        <div
          className={cn(
            `flex-1 pb-2 px-6 sm:px-10 md:px-16 lg:px-32 transition-all`,
            isScrolled && 'shadow-primary/10 shadow-lg'
          )}
        >
          <nav className="flex flex-row justify-between items-end">
            <Link href={'/'}>
              <Image
                src={'/Logo.svg'}
                alt={'logo'}
                width={'100'}
                height={'100'}
                className={`h-16 w-16  md:w-20 md:h-20 transition-transform`}
              />
            </Link>
            <NavGroup />
            <MenuBtn
              isSideDrawerActive={isSideDrawerActive}
              setIsSideDrawerActive={setIsSideDrawerActive}
            />
          </nav>
        </div>
      </header>
    </Transition>
  );
};

export default NavBar;
