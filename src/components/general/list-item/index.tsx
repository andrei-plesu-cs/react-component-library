import { isEmpty } from "lodash";
import React, { useCallback } from "react";
import { HoverProps } from "../../../css-rulesets";
import Text, { TextProps } from "../../../styled-components/Text";
import { IdItem } from "../../../utils/common-util/CommonUtils";
import AvatarComponent, { AvatarComponentProps } from "../avatar";
import GenericListItemComponent from "../generic-list-item";

export type ListItemComponentProps = {
    title?: string;
    description?: string;
    onClick?: () => void;
    avatarProps?: AvatarComponentProps | undefined;
    titleProps?: TextProps | undefined;
    descriptionProps?: TextProps | undefined;
    hover?: HoverProps | undefined;
} & IdItem;

const ListItemComponent = ({
    onClick = () => {},
    title,
    description,
    avatarProps = {},
    titleProps = {},
    descriptionProps = {},
    hover = {}
}: ListItemComponentProps) => {


    /** DEFINE THE HANDLERS BELLOW */

    const onClickHandler = useCallback(() => {
        onClick();
    }, [onClick]);

    const titleRenderer = useCallback(
        () => {
            return (
                <Text 
                    className="title"
                    {...titleProps}
                >
                    {title}
                </Text>
            )
        },
        [title, titleProps]
    )

    const descriptionRenderer = useCallback(
        () => {
            return (
                <Text 
                    className="description"
                    fontColor="secondary" 
                    size="small" 
                    {...descriptionProps}
                >
                    {description}
                </Text>
            )
        },
        [description, descriptionProps]
    )

    const leftAreaRenderer = useCallback(
        () => {
            return (
                <AvatarComponent {...avatarProps} />
            )
        },
        [avatarProps]
    )


    /** define the return statement bellow */
    return (
        <GenericListItemComponent
            hover={hover}
            onClick={onClickHandler}
            titleRenderer={titleRenderer}
            descriptionRenderer={descriptionRenderer}
            leftAreaRenderer={!isEmpty(avatarProps) ? leftAreaRenderer : undefined}
        />
    )

}

export default ListItemComponent;