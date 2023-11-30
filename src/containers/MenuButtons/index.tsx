import React from "react";
import Button from "../../components/Button";

const MenuButtons = ({
  onChangeCurrente,
}: {
  onChangeCurrente: (current: string) => void;
}) => {
  return (
    <section className="pt-12">
      <Button
        id="button-food"
        menu_type="Food"
        onClick={() => onChangeCurrente("food")}
      />
      <Button
        id="button-drinks"
        menu_type="Drinks"
        onClick={() => onChangeCurrente("drinks")}
      />
      <Button
        id="button-catering"
        menu_type="Catering"
        onClick={() => onChangeCurrente("catering")}
      />
    </section>
  );
};

export default MenuButtons;
