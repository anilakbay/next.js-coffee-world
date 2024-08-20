import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  name: string;
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
  return (
    <Link href={link}>
      <li
        className="inline-block text-xl
     py-4 px-4 text-light hover:text-slate-400
      transition duration-200"
      >
        {name}
      </li>
    </Link>
  );
};

export default NavbarItem;
