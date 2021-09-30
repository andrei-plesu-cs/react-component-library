import React, { useCallback } from "react";
import { HoverProps } from "../../../css-rulesets";
import GenericListItemWrapper from "./GenericListItem.wrapper";

export type GenericListItemComponentProps = {
    onClick?: () => void,
    titleRenderer?: () => React.ReactNode,
    descriptionRenderer?: () => React.ReactNode,
    leftAreaRenderer?: () => React.ReactNode,
    rightAreaRenderer?: () => React.ReactNode,
    hover?: HoverProps | undefined;
};

const GenericListItemComponent = ({
    onClick = () => {},
    titleRenderer,
    descriptionRenderer,
    leftAreaRenderer,
    rightAreaRenderer,
    hover = {}
}: GenericListItemComponentProps) => {


    /** DEFINE THE HANDLERS BELLOW */

    const onClickHandler = useCallback(() => {
        onClick();
    }, [onClick]);


    /** define the return statement bellow */
    return (
        <GenericListItemWrapper className="generic-list-item-wrapper" {...hover} onClick={onClickHandler} >

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

export default GenericListItemComponent;