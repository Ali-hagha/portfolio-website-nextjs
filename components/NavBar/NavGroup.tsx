const NavGroup = () => {
  return (
    <div className="hidden md:block text-base">
      <ul className="flex flex-row space-x-10 mb-5">
        <li className="relative">
          <a
            className="p-2 hover:text-primary border-primary after:transition-transform after:absolute after:w-full after:bottom-0 after:left-0  after:h-[2px] after:bg-primary after:scale-x-0 hover:after:origin-left after:origin-right hover:after:scale-x-100"
            href="#about"
          >
            ABOUT
          </a>
        </li>
        <li className="relative">
          <a
            className="p-2 hover:text-primary border-primary after:transition-transform after:absolute after:w-full after:bottom-0 after:left-0  after:h-[2px] after:bg-primary after:scale-x-0 hover:after:origin-left after:origin-right hover:after:scale-x-100"
            href="#projects"
          >
            MY WORK
          </a>
        </li>
        <li className="relative">
          <a
            className="p-2 hover:text-primary border-primary after:transition-transform after:absolute after:w-full after:bottom-0 after:left-0  after:h-[2px] after:bg-primary after:scale-x-0 hover:after:origin-left after:origin-right hover:after:scale-x-100"
            href="#contact"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavGroup;
