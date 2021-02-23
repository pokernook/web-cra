import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mouseup", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mouseup", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
};
