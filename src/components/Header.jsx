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

function NavList() {
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
          About{" "}
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
          Services{" "}
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
          <CustomButton link="/shop" text="Order Now" />
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
