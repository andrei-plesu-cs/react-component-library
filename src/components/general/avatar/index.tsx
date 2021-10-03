import React from "react";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import GenericLoadableImageComponent, { GenericLoadableImageComponentProps } from "../generic-loadable-image";
import AvatarWrapper from "./Avatar.wrapper";

/** component props definition */
export type AvatarComponentProps = {
} & SizeProps & GenericLoadableImageComponentProps;

/**
 * Displays an image in a rounded or flat format. Used the GenericLoadableImage
 * component to render the image.
 * 
 * @component
 */
const AvatarComponent = ({
    size = 'medium',
    ...rest
}: AvatarComponentProps) => {

    /** define the return statement */
    return (
        <AvatarWrapper className="avatar-wrapper" size={size}>
            <GenericLoadableImageComponent {...rest} />
        </AvatarWrapper>
    )

}

/** export the component */
export default AvatarComponent;