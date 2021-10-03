import React, { PropsWithChildren } from "react";
import { ElementTypeProps } from '../../../utils/theme-util/ThemeUtil';
import GenericButtonComponent, { GenericButtonComponentProps } from "../generic-button";
import GhostButtonWrapper from './GhostButton.wrapper';

export type GhostButtonComponentProps = {
} & ElementTypeProps & GenericButtonComponentProps;

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

export default GhostButtonComponent;