import React from "react";
import MenuButtons from "../MenuButtons";
import { useMenu } from "./use-menu";

const Menu = () => {
  const { current, onChangeCurrente, onClear } = useMenu();

  const PDF_MENU: { [key: string]: string } = {
    food: "/documents/menu-pdf-food.pdf",
    drinks: "/documents/menu-pdf-drinks.pdf",
    catering: "/documents/menu-pdf-catering.pdf",
  };

  return (
    <>
      <span
        style={{ padding: "22px", display: "flex", cursor: "pointer" }}
        onClick={() => onClear()}
      >
        Voltar
      </span>
      {!current ? (
        <MenuButtons onChangeCurrente={onChangeCurrente} />
      ) : (
        <iframe src={PDF_MENU[current]} width="100%" height="600px"></iframe>
      )}
    </>
  );
};

export default Menu;
