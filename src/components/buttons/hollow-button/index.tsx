import React, { PropsWithChildren } from "react";
import { ElementTypeProps } from '../../../utils/theme-util/ThemeUtil';
import GenericButtonComponent, { GenericButtonComponentProps } from "../generic-button";
import HollowButtonWrapper from './HollowButton.wrapper';

/** component props definition */
export type HollowButtonComponentProps = {
} & ElementTypeProps & GenericButtonComponentProps;

/**
 * Extends the GenericButton component with additional styling but no new
 * functionality. It exists for visual purposes only
 * 
 * @component
 */
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

/** export the component */
export default HollowButtonComponent;