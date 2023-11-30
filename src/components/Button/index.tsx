import React from "react";

interface ButtonProps {
  id: string;
  menu_type: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ id, menu_type, onClick }) => {
  return (
    <button
      id={id}
      className="s:w-[50%] 3xl:w-[50%] block w-[60%] p-[1%] justify-content align-content bg-caribbean-blue border-solid rounded-button-border-radius border-button-orange border-2 text-xl uppercase m-button-margin"
      onClick={onClick}
    >
      <span className="hover:text-medium-brown visited:text-medium-brown">
        {menu_type} Menu
      </span>
    </button>
  );
};

export default Button;
