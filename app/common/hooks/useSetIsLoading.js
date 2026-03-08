import { useEffect } from "react";
import usePrevious from "./usePrevious";

export default (isLoading, loadingSetter) => {
  const wasLoading = usePrevious(isLoading);
  useEffect(() => {
    if (isLoading && !wasLoading) {
      loadingSetter(true);
    }

    if (wasLoading && !isLoading) {
      loadingSetter(false);
    }

    return () => {
      loadingSetter(false);
    };
  }, [isLoading]);
};