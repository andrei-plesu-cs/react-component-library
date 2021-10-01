import React, { ReactNode, useCallback } from "react";
import { BoxShadowProps, DimensionsProps } from "../../../css-rulesets";
import { IdItem, IdType } from "../../../utils/common-util/CommonUtils";
import ScrollableContainerComponent from "../scrollable-container";
import GenericListWrapper from "./GenericList.wrapper";

export type GenericListComponentProps<T extends IdItem> = {
    items?: T[],
    itemRenderer: (item: T, index?: number) => ReactNode,
    onItemClick?: (id: IdType) => void,
    dimensions?: DimensionsProps | undefined;
    onBottomReach?: () => void;
} & BoxShadowProps;

const GenericListComponent = <T extends IdItem>({
    items,
    itemRenderer,
    boxShadow,
    onItemClick = () => {},
    dimensions = {},
    onBottomReach = () => {}
}: GenericListComponentProps<T>) => {


    /** DEFINE THE HANDLER BELLOW */

    const onMouseDownHandler = useCallback(
        (event: any, id: IdType) => {
            event.preventDefault();
            event.stopPropagation();
            onItemClick(id);
        },
        [onItemClick]
    )

    const renderItemMapper = useCallback(
        (item: T, index: number): ReactNode => {
            if (!itemRenderer) return null;

            return (
                <div 
                    key={item.id} 
                    className="list-item-wrapper" 
                    onMouseDown={(event) => onMouseDownHandler(event, item.id)}
                >
                    {itemRenderer(item, index)}
                </div>
            )
        },
        [itemRenderer, onMouseDownHandler]
    );


    /** define the return statement bellow */
    return (
        <GenericListWrapper boxShadow={boxShadow} className="generic-list-wrapper">
            <ScrollableContainerComponent {...dimensions} onBottomReach={onBottomReach}>
                {items?.map(renderItemMapper)}
            </ScrollableContainerComponent>
        </GenericListWrapper>
    )

}

export default GenericListComponent;