import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};
const MenuBtn = ({ isSideDrawerActive, setIsSideDrawerActive }: Props) => {
  return (
    <div className="md:hidden z-20">
      <button
        className="p-4 pb-0 -mr-4"
        onClick={() => setIsSideDrawerActive(prevState => !prevState)}
      >
        {isSideDrawerActive ? (
          <Image
            src={'/cancel.svg'}
            alt={'menu'}
            width={'50'}
            height={'50'}
            className={'h-8 w-8 '}
          />
        ) : (
          <Image
            src={'/hamburger.svg'}
            alt={'close menu'}
            width={'50'}
            height={'50'}
            className={'h-8 w-8 '}
          />
        )}
      </button>
    </div>
  );
};

export default MenuBtn;
