import React from "react";
import { IconType } from "react-icons";

interface OrderButtonProps {
  icon: IconType;
  onClick?: () => void;
  label: string;
}

const OrderButton: React.FC<OrderButtonProps> = ({
  icon: Icon,
  label,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action: scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      className="bg-gradient-to-r from-brandDark to-secondary gap-2 flex shadow-lg hover:shadow-xl px-4 py-2
    rounded-full items-center uppercase font-second2 hover:scale-105 hover:from-secondary hover:to-brandDark
    duration-300 transition-all focus:outline-none focus:ring-2 focus:ring-brandDark focus:ring-offset-2 transform text-sm"
      onClick={handleClick}
      aria-label={`${label} button`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {label}
      {<Icon />}
    </button>
  );
};

export default OrderButton;
