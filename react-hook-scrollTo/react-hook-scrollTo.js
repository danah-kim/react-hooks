import { useEffect } from "react";

export const scrollTo = ({ x = 0, y = 0, id, option = "auto" }) => {
  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    option !== ("auto" || "smooth")
  ) {
    return;
  }

  useEffect(() => {
    const element = document.getElementById(id);

    if (typeof id !== "undefined" && !element) {
      return;
    }

    /* can controll restoring scroll positions */
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return window.scrollTo({
      top: typeof id !== "undefined" ? element.offsetTop + y : y,
      left: typeof id !== "undefined" ? element.offsetLeft + x : x,
      behavior: option ? "smooth" : "auto"
    });
  });
};
