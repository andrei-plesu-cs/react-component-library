import React, { useEffect } from "react";

export type IdType = number | string;

export type IdItem = {
    id: IdType;
}

export const useOutsideClick = (
    ref: React.MutableRefObject<any>,
    clickOutsideCallback: (otherProps: any) => void,
    otherProps: any
) => {

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                clickOutsideCallback(otherProps);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, clickOutsideCallback, otherProps]);

}

export const debounce = <T>(
    callback: (newValue: T, otherProps: any) => void, 
    duration: number, 
    otherProps: any
) => {
    let timeoutId = 0;

    return (newValue: T) => {
      if (timeoutId > 0) {
        clearTimeout(timeoutId);
        timeoutId = 0;
      }

      timeoutId = setTimeout(() => {
        callback(newValue, otherProps);
      }, duration) as any;
    }
  }