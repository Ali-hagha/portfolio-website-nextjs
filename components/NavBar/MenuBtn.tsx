import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};
const MenuBtn = ({ isSideDrawerActive, setIsSideDrawerActive }: Props) => {
  return (
    <div className="md:hidden">
      <button
        className="pl-4 pt-4 relative z-30"
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
