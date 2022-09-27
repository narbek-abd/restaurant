import { RefObject, useEffect } from "react";

function useOnClickOutside(
  ref: RefObject<Element>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as HTMLElement)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
