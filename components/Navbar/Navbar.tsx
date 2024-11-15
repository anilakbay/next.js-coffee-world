import Image from "next/image";
import React from "react";
import NavbarItem from "./NavbarItem";
import OrderButton from "../Button/OrderButton";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#",
  },
];

const Navbar: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-secondary
     to-secondary/75 shadow-lg text-light"
    >
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="font-pacifico
                font-bold text-xl lg:text-3xl md:text-2xl
                items-center justify-center flex gap-2"
          >
            <Image
              src="/images/logo/3.png"
              alt=""
              width={50}
              height={50}
            ></Image>
            Coffee World
          </div>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="400"
            className="hidden lg:flex items-center gap-3 
                justify-between"
          >
            <ul>
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
    </div>
  );
};

export default Navbar;
