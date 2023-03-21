import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};
const DrawerMenuBtn = ({
  isSideDrawerActive,
  setIsSideDrawerActive,
}: Props) => {
  return (
    <button
      className="pl-4 pt-4 fixed top-3 right-5"
      onClick={() => setIsSideDrawerActive(prevState => !prevState)}
    >
      <Image
        src={'/cancel.svg'}
        alt={'menu'}
        width={'50'}
        height={'50'}
        className={'h-8 w-8 '}
      />
    </button>
  );
};

export default DrawerMenuBtn;
