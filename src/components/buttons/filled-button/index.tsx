import React, { PropsWithChildren } from "react";
import { ElementTypeProps } from '../../../utils/theme-util/ThemeUtil';
import GenericButtonComponent, { GenericButtonComponentProps } from "../generic-button";
import FilledButtonWrapper from './FilledButton.wrapper';

/** component props definition */
export type FilledButtonComponentProps = {
} & ElementTypeProps & GenericButtonComponentProps;

/**
 * Filled button built upon the GenericButton component, simply adds styles to the
 * generic button
 * 
 * @component
 */
const FilledButtonComponent = ({
    elementType = 'primary',
    children,
    ...rest
}: PropsWithChildren<FilledButtonComponentProps>) => {

    /** define the return statement bellow */
    return (
        <FilledButtonWrapper 
            className="filled-button-wrapper" 
            elementType={elementType}
        >
            <GenericButtonComponent {...rest}>
                { children }
            </GenericButtonComponent>
        </FilledButtonWrapper>
    )

}

/** export the component */
export default FilledButtonComponent;