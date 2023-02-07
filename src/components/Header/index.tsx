import type { FC } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header: FC = () => {
  const navMenus = [
    { link: "#home", text: "Home" },
    { link: "#about", text: "About Us" },
    { link: "#timeline", text: "Timeline Projects" },
    { link: "#project", text: "Our Project" },
    { link: "#tools", text: "Our Tools" },
  ];

  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    document.body.scrollTop >= 50 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed top-0 z-30 left-0 right-4 ${
        isScroll ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-12 md:px-10 xl:pl-5 xl:pr-16">
        <div className="img-wrapper relative md:h-20 md:w-20 lg:h-24 lg:w-24">
          <Image src="/img/logo-MCC.svg" alt="logo Mafia Code Community" fill />
        </div>
        <nav>
          <ul className="flex gap-x-10">
            {navMenus.map((menu, index) => (
              <li key={index}>
                <a href={menu.link} className="nav__link text-white font-medium lg:text-lg">
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
