import { useState } from "react";

export const useMenu = () => {
  const [current, setCurrent] = useState<string | undefined>(undefined);

  const onClear = () => {
    setCurrent(undefined);
  };

  const onChangeCurrente = (current: string) => {
    setCurrent(current);
  };
  return { current, onClear, onChangeCurrente };
};
