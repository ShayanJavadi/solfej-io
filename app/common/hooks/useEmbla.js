import { useEffect, useState } from "react";

export default () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    if (embla) {
      embla.on("select", () => {
        const index = embla.selectedScrollSnap();
        setCarouselIndex(index);
      });
    }
  }, [embla]);

  return { 
    embla: [embla, setEmbla],
    index: [carouselIndex, setCarouselIndex]
  };
};