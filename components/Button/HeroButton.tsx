import React from "react";
import { IconType } from "react-icons";

interface HeroButtonProps {
  icon: IconType;
  onClick?: () => void;
  label: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  icon: Icon,
  label,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action: scroll to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      className="bg-gradient-to-r from-primary to-secondary gap-4 flex shadow-lg hover:shadow-xl px-6 p-4
    rounded-full items-center uppercase font-second2 hover:scale-105 hover:from-secondary hover:to-primary
    duration-300 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transform"
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

export default HeroButton;
