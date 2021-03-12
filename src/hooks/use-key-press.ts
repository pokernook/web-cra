import { KeyboardEvent, useCallback } from "react";

export const useKeyPress = (key: string, action: () => void) =>
  useCallback(
    (e: KeyboardEvent) => {
      if (e.key === key) {
        e.stopPropagation();
        action();
      }
    },
    [key, action]
  );
