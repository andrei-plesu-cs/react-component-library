import React, { PropsWithChildren, useCallback, useRef } from "react";
import { DimensionsProps } from "../../../css-rulesets";
import ScrollableContainerWrapper from "./ScrollableContainer.wrapper";

export type ScrollableContainerComponentProps = {
    onBottomReach?: () => void;
} & DimensionsProps;

const ScrollableContainerComponent = ({
    children,
    onBottomReach = () => {},
    ...dimensions
}: PropsWithChildren<ScrollableContainerComponentProps>) => {

    const containerRef = useRef(null);


    /** DEFINE THE HANDLERS BELLOW */

    const handleScroll = useCallback(
        () => {
            if (containerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
                if (scrollTop + clientHeight === scrollHeight) {
                  onBottomReach();
                }
              }
        },
        [onBottomReach]
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

export default ScrollableContainerComponent;