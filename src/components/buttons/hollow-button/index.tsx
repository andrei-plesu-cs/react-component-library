import React, { PropsWithChildren } from "react";
import { ElementTypeProps } from '../../../utils/theme-util/ThemeUtil';
import GenericButtonComponent, { GenericButtonComponentProps } from "../generic-button";
import HollowButtonWrapper from './HollowButton.wrapper';

export type HollowButtonComponentProps = {
} & ElementTypeProps & GenericButtonComponentProps;

const HollowButtonComponent = ({
    elementType = 'primary',
    children,
    ...rest
}: PropsWithChildren<HollowButtonComponentProps>) => {

    /** define the return statement bellow */
    return (
        <HollowButtonWrapper 
            className="filled-button-wrapper" 
            elementType={elementType}
        >
            <GenericButtonComponent {...rest}>
                { children }
            </GenericButtonComponent>
        </HollowButtonWrapper>
    )

}

export default HollowButtonComponent;