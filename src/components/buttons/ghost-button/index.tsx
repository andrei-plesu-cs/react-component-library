import React, { PropsWithChildren } from "react";
import { ElementTypeProps } from '../../../utils/theme-util/ThemeUtil';
import GenericButtonComponent, { GenericButtonComponentProps } from "../generic-button";
import GhostButtonWrapper from './GhostButton.wrapper';

/** component props definition */
export type GhostButtonComponentProps = {
} & ElementTypeProps & GenericButtonComponentProps;

/**
 * Extends the GenericButton component with additional styling but no new
 * functionality. It exists for visual purposes only
 * 
 * @component
 */
const GhostButtonComponent = ({
    elementType = 'primary',
    children,
    ...rest
}: PropsWithChildren<GhostButtonComponentProps>) => {

    /** define the return statement bellow */
    return (
        <GhostButtonWrapper 
            className="filled-button-wrapper" 
            elementType={elementType}
        >
            <GenericButtonComponent {...rest}>
                { children }
            </GenericButtonComponent>
        </GhostButtonWrapper>
    )

}

/** export the component */
export default GhostButtonComponent;