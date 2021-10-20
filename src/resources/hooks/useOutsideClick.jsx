import { useEffect } from "react";

/**
 * Hook that handles clicks outside of the passed ref
 */
function useOutsideClick(ref, onOutsideClick) {
  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target))
        if (onOutsideClick) onOutsideClick();
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, onOutsideClick]);
}

export default useOutsideClick;
