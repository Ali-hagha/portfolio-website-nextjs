import { Dispatch, SetStateAction } from 'react';

const SideDrawer = ({
  isSideDrawerActive,
  setIsSideDrawerActive,
}: {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="ease-out duration-200">
      <div
        className={`${
          isSideDrawerActive ? 'opacity-100 block' : 'opacity-0 hidden'
        } md:hidden inset-0 fixed bg-white/30 backdrop-blur transition-opacity z-10`}
        onClick={() => setIsSideDrawerActive(false)}
      ></div>
      <aside
        className={`${
          isSideDrawerActive ? 'translate-x-0' : 'translate-x-96'
        } md:hidden h-screen w-[min(75%,384px)] bg-primary fixed top-0 right-0 bottom-0 transition-transform z-20`}
      ></aside>
    </div>
  );
};

export default SideDrawer;
