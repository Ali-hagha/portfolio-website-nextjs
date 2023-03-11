import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';

type props = {
  isSideDrawerActive: boolean;
  setIsSideDrawerActive: Dispatch<SetStateAction<boolean>>;
};

const SideDrawer = ({ isSideDrawerActive, setIsSideDrawerActive }: props) => {
  useEffect(() => {
    if (isSideDrawerActive) document.body.classList.add('overflow-hidden');
    if (!isSideDrawerActive) document.body.classList.remove('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSideDrawerActive]);

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
        } md:hidden h-screen w-[min(75%,384px)] bg-primary fixed top-0 right-0 bottom-0 transition-transform z-20  flex flex-col items-center justify-center shadow-2xl`}
      >
        <nav className="-mt-20">
          <ul className="flex flex-col gap-10 items-center justify-center">
            <li className="">
              <div className="relative">
                <Link
                  href={'#about'}
                  className="text-white after:transition-transform after:absolute after:w-full after:bottom-0 after:left-0  after:h-[2px] after:bg-white after:scale-x-0 hover:after:origin-left after:origin-right hover:after:scale-x-100 py-3 px-4 text-lg "
                >
                  ABOUT
                </Link>
              </div>
            </li>
            <li>
              <div className="relative">
                <Link
                  href={'#mywork'}
                  className="text-white after:transition-transform after:absolute after:w-full after:bottom-0 after:left-0  after:h-[2px] after:bg-white after:scale-x-0 hover:after:origin-left after:origin-right hover:after:scale-x-100 py-3 px-4 text-lg "
                >
                  MY WORK
                </Link>
              </div>
            </li>
            <li>
              <div className="relative">
                <Link
                  href={'#contact'}
                  className="text-white after:transition-transform after:absolute after:w-full after:bottom-0 after:left-0  after:h-[2px] after:bg-white after:scale-x-0 hover:after:origin-left after:origin-right hover:after:scale-x-100 py-3 px-4 text-lg "
                >
                  CONTACT
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideDrawer;
