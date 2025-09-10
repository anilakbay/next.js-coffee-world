import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  name: string;
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
  return (
    <li role="none">
      <Link 
        href={link}
        className="inline-block text-lg
         py-2 px-3 text-light hover:text-slate-400
          transition duration-200 focus:outline-none focus:ring-2 focus:ring-light focus:ring-offset-2 focus:ring-offset-secondary rounded"
        role="menuitem"
        tabIndex={0}
        aria-label={`Navigate to ${name} section`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarItem;
