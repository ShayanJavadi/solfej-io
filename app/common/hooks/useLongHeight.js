import { useEffect } from "react";
import scrollUp from "../../util/browser/scrollUp";
export default () => {
  useEffect(() => {
    document.body.classList.add("long-height-lessons");
    scrollUp();

    return () => {
      document.body.classList.remove("long-height-lessons");
    };
  }, []);
};
