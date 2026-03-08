import { useEffect } from "react";

export default (color, resetColor = "#fff") => {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    
    return () => document.body.style.backgroundColor = resetColor;
  }, []);
};
