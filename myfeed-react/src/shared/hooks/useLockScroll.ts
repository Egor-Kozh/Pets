import { useState } from "react";

export const useLockScroll = () => {
  const [scroll, setScroll] = useState(true);

  const changeScroll = () => {
    if (scroll) {
      document.body.style.overflow = "hidden";
      setScroll(false);
    } else {
      document.body.style.overflow = "";
      setScroll(true);
    }
  };

  return changeScroll;
};
