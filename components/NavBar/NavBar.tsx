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
    <>
      <header
        className={`fixed z-10  top-0 left-0 right-0 mx-auto overflow-x-hidden flex flex-row items-end justify-between  bg-nuetral-light/70 pb-2 px-6 sm:px-10 md:px-16 lg:px-32 backdrop-blur-xl }`}
      >
        <nav className="flex grow flex-row justify-between items-end">
          <Link href={'/'} className="">
            <Image
              src={'/Logo.svg'}
              alt={'logo'}
              width={'100'}
              height={'100'}
              className={'h-16 w-16 md:w-24 md:h-24'}
            />
          </Link>
          <NavGroup />
          <MenuBtn
            isSideDrawerActive={isSideDrawerActive}
            setIsSideDrawerActive={setIsSideDrawerActive}
          />
        </nav>
      </header>
    </>
  );
};

export default NavBar;
