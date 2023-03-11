import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import MenuBtn from './MenuBtn';
import NavGroup from './NavGroup';

type props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};

const NavBar = ({ isSideDrawerActive, setIsSideDrawerActive }: props) => {
  return (
    <header className="relative  max-w-screen-2xl   mx-auto px-6 md:px-20 lg:px-36 overflow-x-hidden">
      <nav className="flex flex-row justify-between items-end ">
        <Link href={'/'}>
          <Image
            src={'/Logo.svg'}
            alt={'logo'}
            width={'100'}
            height={'100'}
            className={'h-16 w-16 md:w-24 md:h-24  relative z-20'}
          />
        </Link>
        <NavGroup />
        <MenuBtn
          isSideDrawerActive={isSideDrawerActive}
          setIsSideDrawerActive={setIsSideDrawerActive}
        />
      </nav>
    </header>
  );
};

export default NavBar;
