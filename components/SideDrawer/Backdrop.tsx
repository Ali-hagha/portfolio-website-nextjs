import { Transition } from '@headlessui/react';
import { Dispatch, Fragment, SetStateAction } from 'react';

type props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};

const Backdrop = ({ isSideDrawerActive, setIsSideDrawerActive }: props) => {
  return (
    <Transition
      show={isSideDrawerActive}
      enter="duration-200 transition-opacity"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Fragment}
    >
      <div
        className={` inset-0 fixed bg-gray-300/50 backdrop-blur z-10`}
        onClick={() => setIsSideDrawerActive(false)}
      ></div>
    </Transition>
  );
};

export default Backdrop;
