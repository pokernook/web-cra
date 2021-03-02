import { useEffect } from "react";

export const useKeyPress = (key: string, action: () => void) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === key) {
        action();
      }
    };

    document.addEventListener("keyup", listener);

    return () => document.removeEventListener("keyup", listener);
  }, [action, key]);
};
