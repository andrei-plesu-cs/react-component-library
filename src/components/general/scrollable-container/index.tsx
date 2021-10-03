import React, { PropsWithChildren, useCallback, useRef } from "react";
import { DimensionsProps } from "../../../css-rulesets";
import ScrollableContainerWrapper from "./ScrollableContainer.wrapper";

/** component definition props */
export type ScrollableContainerComponentProps = {
    /** Signals the parent component when a scroll end has been detected */
    onBottomReach?: () => void;
} & DimensionsProps;

/**
 * Container that offers the possibility the set a size to its children and also
 * detect the scroll end, and pass it to the calling parent though props callback
 * 
 * @component
 */
const ScrollableContainerComponent = ({
    children,
    onBottomReach = () => {},
    ...dimensions
}: PropsWithChildren<ScrollableContainerComponentProps>) => {

    /** Reflects the scrolling container to help calculating when the scroll end is reached */
    const containerRef = useRef(null);


    /** DEFINE THE HANDLERS BELLOW */

    /** Gets called on scroll and calculates if the scroll end has been reached. In that case,
     * signal the parent of the event by the 'onBottomReach' callback
     */
    const handleScroll = useCallback(
        () => {
            if (containerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = containerRef.current as any;
                if (scrollTop + clientHeight === scrollHeight) {
                  onBottomReach();
                }
              }
        },
        [onBottomReach, containerRef]
    )


    /** define the return statement bellow */
    return (
        <ScrollableContainerWrapper 
            {...dimensions}
            onScroll={handleScroll}
            ref={containerRef}
        >
            { children }
        </ScrollableContainerWrapper>
    )

}

/** export the component */
export default ScrollableContainerComponent;