import React, { useCallback } from "react";
import Text, { TextProps } from "../../../styled-components/Text";
import { IdItem } from "../../../utils/common-util/CommonUtils";
import AvatarComponent, { AvatarComponentProps } from "../avatar";
import GenericListItemComponent from "../generic-list-item";
import { isEmpty } from "lodash";

/** component props definition */
export type ListItemComponentProps = {
    /** The more poignant text in the component */
    title?: string;

    /** Smaller text that should describe the title */
    description?: string;

    /** Signals parent when the item has been clicked */
    onClick?: () => void;

    /** Props that control the avatar */
    avatarProps?: AvatarComponentProps | undefined;

    /** Props that control the title */
    titleProps?: TextProps | undefined;

    /** Props that control the description */
    descriptionProps?: TextProps | undefined;
} & IdItem;

/**
 * Implements the generic list component, by using the Avatar and Text components.
 * 
 * @component
 */
const ListItemComponent = ({
    onClick = () => {},
    title,
    description,
    avatarProps = {},
    titleProps = {},
    descriptionProps = {}
}: ListItemComponentProps) => {


    /** DEFINE THE HANDLERS BELLOW */

    /** Used by the GenericListItem component to render the title as Text */
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

    /** Used by the GenericListItem component to render the description as Text */
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

    /** Used by the GenericListItem component to render the left area section using the
     * Avatar component
     */
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
            onClick={onClick}
            titleRenderer={titleRenderer}
            descriptionRenderer={descriptionRenderer}
            leftAreaRenderer={!isEmpty(avatarProps) ? leftAreaRenderer : undefined}
        />
    )

}

/** export the component */
export default ListItemComponent;