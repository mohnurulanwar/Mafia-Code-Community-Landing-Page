import type { FC } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";

const Header: FC = () => {
  const navMenus = [
    { link: "#home", text: "Home" },
    { link: "#about", text: "About Us" },
    { link: "#timeline", text: "Timeline Projects" },
    { link: "#project", text: "Our Project" },
    { link: "#tools", text: "Our Tools" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleScroll = () => {
    document.body.scrollTop >= 50 ? setIsScroll(true) : setIsScroll(false);
  };

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-4 z-30 ${
        isScroll ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-10 xl:pl-5 xl:pr-16">
        <div className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
          <Image src="/img/logo-MCC.svg" alt="logo Mafia Code Community" fill />
        </div>
        <div className="md:hidden">
          <p className="text-lg font-medium text-white">Mafia Code Comunity</p>
        </div>
        <div
          className="cursor-pointer text-lg text-white md:hidden"
          onClick={handleToggleMenu}
        >
          <BiMenu></BiMenu>
        </div>
        <nav
          className={`${
            isOpenMenu ? "max-[768px]:scale-y-1" : "max-[768px]:scale-y-0"
          } absolute inset-0 top-14 grid h-[100vh] origin-top place-items-center rounded-lg bg-[#14121A]/5 backdrop-blur transition md:static md:block md:h-auto`}
        >
          <ul className="flex flex-col gap-x-10 gap-y-6 text-center md:flex-row md:text-left">
            {navMenus.map((menu, index) => (
              <li key={index}>
                <a
                  href={menu.link}
                  className="nav__link text-xl font-medium text-white md:text-lg"
                >
                  {menu.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
