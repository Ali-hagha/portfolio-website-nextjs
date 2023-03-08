const SideDrawer = ({
  isSideDrawerActive,
}: {
  isSideDrawerActive: boolean;
}) => {
  return (
    <div className="ease-out duration-200">
      <div
        className={`${
          isSideDrawerActive ? 'opacity-100' : 'opacity-0'
        } md:hidden inset-0 fixed bg-white/30 backdrop-blur-lg transition-opacity`}
      ></div>
      <aside
        className={`${
          isSideDrawerActive ? 'translate-x-0' : 'translate-x-96'
        } md:hidden h-screen w-[min(75%,384px)] bg-primary fixed top-0 right-0 bottom-0 transition-transform `}
      ></aside>
    </div>
  );
};

export default SideDrawer;
