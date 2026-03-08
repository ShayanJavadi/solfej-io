import { useEffect, useRef } from "react";
import clearLoops from "../../util/tone/clearLoops";

export default () => {
  let loops = useRef([]);

  useEffect(() => {
    return () => {
      clearLoops(loops);
    };
  }, []);

  return loops;
};