import React from "react";
import GenericListItemWrapper from "./GenericListItem.wrapper";

/** component props definition */
export type GenericListItemComponentProps = {
    /** Gets called when the element is clicked to signal the parent about the event */
    onClick?: () => void;

    /** Used to render the title section using the render prop pattern */
    titleRenderer?: () => React.ReactNode;

    /** Used to render the description section using the render prop pattern */
    descriptionRenderer?: () => React.ReactNode;

    /** Used to render the leading section using the render prop pattern */
    leftAreaRenderer?: () => React.ReactNode;

    /** Used to render the trailing section using the render prop pattern */
    rightAreaRenderer?: () => React.ReactNode;
};

/**
 * Component that defines the structure for a basic list item. Uses the render prop pattern
 * to dinamically customize and render content into the component.
 * 
 * @component
 */
const GenericListItemComponent = ({
    onClick = () => {},
    titleRenderer,
    descriptionRenderer,
    leftAreaRenderer,
    rightAreaRenderer,
}: GenericListItemComponentProps) => {

    /** define the return statement bellow */
    return (
        <GenericListItemWrapper className="generic-list-item-wrapper" onClick={onClick} >

            { leftAreaRenderer ?
                <div className="left-section">
                    { leftAreaRenderer() }
                </div> : null
            }

            <div className="middle-section">
                {
                    titleRenderer ?
                    <div className="title-renderer">
                        {titleRenderer()}
                    </div> : null
                }

                {
                    descriptionRenderer ?
                    <div className="description-renderer">
                        {descriptionRenderer()}
                    </div> : null
                }
                
            </div>

            { rightAreaRenderer ?
                <div className="right-section">
                    { rightAreaRenderer() }
                </div> : null
            }

        </GenericListItemWrapper>
    )

}

/** export the component */
export default GenericListItemComponent;