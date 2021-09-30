import React from "react";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import GenericLoadableImageComponent, { GenericLoadableImageComponentProps } from "../generic-loadable-image";
import AvatarWrapper from "./Avatar.wrapper";

export type AvatarComponentProps = {
} & SizeProps & GenericLoadableImageComponentProps;

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

export default AvatarComponent;