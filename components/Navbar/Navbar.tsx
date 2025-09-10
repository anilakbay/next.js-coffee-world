import Image from "next/image";
import React from "react";
import NavbarItem from "./NavbarItem";
import OrderButton from "../Button/OrderButton";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#hero",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#contact",
  },
];

const Navbar: React.FC = () => {
  return (
    <nav
      className="bg-gradient-to-r from-secondary/95 to-secondary/90 backdrop-blur-md
     shadow-lg text-light border-b border-white/10 sticky top-0 z-50 transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="font-pacifico
                font-bold text-xl lg:text-2xl md:text-xl
                items-center justify-center flex gap-3 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/images/logo/3.png"
              alt="Coffee World Logo"
              width={40}
              height={40}
              className="drop-shadow-lg"
            ></Image>
            <span>Coffee World</span>
          </div>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="400"
            className="hidden lg:flex items-center gap-8"
          >
            <ul aria-label="Main menu" className="flex items-center gap-6">
              {Menu.map((menu) => (
                <NavbarItem
                  link={menu.link}
                  name={menu.name}
                  key={menu.id}
                ></NavbarItem>
              ))}
            </ul>
          </div>
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
            <OrderButton icon={FaCoffee} label="Order"></OrderButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
