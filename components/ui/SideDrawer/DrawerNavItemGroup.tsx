import { ReactNode } from 'react';

const DrawerNavItemGroup = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="-mt-20">
      <ul className="flex flex-col gap-10 items-center justify-center">
        {children}
      </ul>
    </nav>
  );
};

export default DrawerNavItemGroup;
