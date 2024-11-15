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
  return (
    <button
      className="bg-brandDark gap-4 flex shadow-lg px-6 p-4
    rounded-full items-center uppercase font-second2 hover:scale-105
    duration-700 transition"
    >
      {label}
      {<Icon />}
    </button>
  );
};

export default OrderButton;
