import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import Logo from "./Logo";
import { IoIosArrowDown } from "react-icons/io";

function NavList() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };
  const handleLinkClick = () => {
    if (openNav === true) {
      setOpenNav(false);
    }
  };
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a
          href="#"
          className="flex items-center hover:text-secondary transition-colors"
        >
          Home
        </a>
      </Typography>
      <hr className="bg-primary lg:hidden" />
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a
          href="#"
          className="flex items-center hover:text-secondary transition-colors"
        >
          About
        </a>
      </Typography>
      <hr className="bg-primary lg:hidden" />

      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-semibold relative"
        onMouseEnter={toggleMenu}
        onMouseLeave={closeMenu}
      >
        <a
          href="#"
          className="flex items-center hover:text-secondary transition-colors"
        >
          Services
          <IoIosArrowDown
            className={`transition-transform ${openMenu ? "rotate-180" : ""}`}
          />
        </a>
        {openMenu && (
          <div className="absolute top-8 left-0 py-2 bg-white shadow-lg rounded-lg w-[230px] 
          
          ">
            <Link
              onClick={handleLinkClick}
              className="px-4 py-2  hover:bg-gray-200 gap-2 text-[#797B89] text-sm mb-1 no-underline flex items-center"
              to=""
            >
              For Customers
            </Link>
            <Link
              onClick={() => {
                handleLinkClick();
              }}
              className="px-4 py-2  hover:bg-gray-200 gap-2 text-[#797B89] text-sm mb-1 no-underline flex items-center"
              to="#"
            >
              For Medical Partners
            </Link>
          </div>
        )}
      </Typography>

      <hr className="bg-primary lg:hidden" />

      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a
          href="#"
          className="flex items-center hover:text-secondary transition-colors"
        >
          Blog
        </a>
      </Typography>
      <hr className="bg-primary lg:hidden" />
    </ul>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="w-[95%] mx-auto rounded-md mt-2 px-5 py-3 shadow-md sticky bg-[#F4F8BC] ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="w-1/5">
          <Logo />
        </div>
        <div className="w-1/3 hidden lg:block mx-auto">
          <NavList />
        </div>
        <div className="hidden lg:block">
          <CustomButton link="/shop" text="Order Now" wid={"full"} />
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}
