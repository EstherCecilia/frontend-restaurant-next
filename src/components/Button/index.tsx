import React from "react";

interface ButtonProps {
  id: string;
  menu_type: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ id, menu_type, url }) => {
  return (
    <button
      id={id}
      className="s:w-[50%] 3xl:w-[50%] block w-[60%] p-[1%] justify-content align-content bg-caribbean-blue border-solid rounded-button-border-radius border-button-orange border-2 text-xl uppercase m-button-margin"
    >
      <a
        className="hover:text-medium-brown visited:text-medium-brown"
        href={url}
      >
        {menu_type} Menu
      </a>
    </button>
  );
};

export default Button;
