import React from "react";
import Button from "../../components/Button";

const MenuButtons = () => {
  return (
    <section className="pt-12">
      <Button url="/blackgyalbites-nextjs/menu-pdf-food.pdf" menu_type="Food" />
      <Button
        url="/blackgyalbites-nextjs/menu-pdf-drinks.pdf"
        menu_type="Drinks"
      />
      <Button
        url="/blackgyalbites-nextjs/menu-pdf-catering.pdf"
        menu_type="Catering"
      />
    </section>
  );
};

export default MenuButtons;
