import { useEffect } from "react";

export default (cookieId) => {
  useEffect(() => {
    const lastScrollLocation = localStorage && localStorage.getItem(cookieId);
   
    setTimeout(() => {
      if (lastScrollLocation !== undefined) {
        window && window.scrollTo(0, lastScrollLocation);
      } 
    }, 100);
    return () => window && localStorage && localStorage.setItem(cookieId, window.scrollY);
  }, []);
};
