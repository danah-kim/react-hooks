import { useEffect } from "react";

export const scrollTo = ({ x = 0, y = 0, id, option = false }) => {
  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    typeof option !== "boolean"
  ) {
    console.log("Check Your Argument value");
    return;
  }

  useEffect(() => {
    const element = document.getElementById(id);

    if (typeof id !== "undefined" && !element) {
      console.log("Check Your Element ID");
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
  }, [x, y, id]);
};
