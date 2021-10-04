import classNames from "classnames";
import React, { useCallback } from "react";
import { BoxShadowProps, DimensionsProps } from "../../../css-rulesets";
import { IdItem, IdType } from "../../../utils/common-util/CommonUtils";
import ScrollableContainerComponent from "../scrollable-container";
import GenericListWrapper from "./GenericList.wrapper";

/** define component props */
export type GenericListComponentProps<T extends IdItem> = {
    /** The items of the list */
    items?: T[];

    /** Takes an item as a param, and return a component that represents that particular
     * item. Reflects the render prop pattern
     */
    itemRenderer: (item: T, index?: number) => React.ReactNode;

    /** Signals the parent component about the items that has been clicked */
    onItemClick?: (id: IdType) => void;

    /** Used to set the dimensions of the list */
    dimensions?: DimensionsProps | undefined;

    /** Signals when the bottom of the list has been reached, in case the  */
    onBottomReach?: () => void;

    /** Adds additional style to the item whose id equals this variable */
    selectedItemId?: IdType;

    /** If set to true, the items in the list will appear to be selectable (hover styles added to it) */
    areItemsSelectable?: boolean;

    /** Renders a divider between the items of the list */
    itemDividerRenderer?: () => React.ReactNode;
} & BoxShadowProps;

const GenericListComponent = <T extends IdItem>({
    items,
    itemRenderer,
    boxShadow,
    onItemClick = () => {},
    dimensions = {},
    onBottomReach = () => {},
    selectedItemId,
    areItemsSelectable = false,
    itemDividerRenderer
}: GenericListComponentProps<T>) => {


    /** DEFINE THE HANDLER BELLOW */

    /** Gets called when an item element has been clicked and signals the parent about
     * the event. It also stops the propagation of the event to not interfeer with the
     * focus/click events of the select component (just for this particular case)
     */
    const onMouseDownHandler = useCallback(
        (event: any, id: IdType) => {
            event.preventDefault();
            event.stopPropagation();
            onItemClick(id);
        },
        [onItemClick]
    )

    /** Helps to render each item in the list. Calls 'itemRenderer' to render the items, so
     * this function must be implemented by the parent
      */
    const renderItemMapper = useCallback(
        (item: T, index: number): React.ReactNode => {
            if (!itemRenderer) return null;

            return (
                <React.Fragment key={item.id} >
                    <div
                        className={classNames({
                            'list-item-wrapper': true,
                            'active-list-item': selectedItemId && (selectedItemId === item.id) 
                        })}
                        onMouseDown={(event) => onMouseDownHandler(event, item.id)}
                    >
                        {itemRenderer(item, index)}
                    </div>
                    {
                        (index+1 < (items?.length ?? 0) && itemDividerRenderer) ?
                        itemDividerRenderer(): null
                    }
                </React.Fragment>
            )
        },
        [itemRenderer, onMouseDownHandler]
    );


    /** define the return statement bellow */
    return (
        <GenericListWrapper 
            boxShadow={boxShadow} 
            className="generic-list-wrapper"
            areItemsSelectable={areItemsSelectable}
        >
            <ScrollableContainerComponent {...dimensions} onBottomReach={onBottomReach}>
                {items?.map(renderItemMapper)}
            </ScrollableContainerComponent>
        </GenericListWrapper>
    )

}

/** export the component */
export default GenericListComponent;