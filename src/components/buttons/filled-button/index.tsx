import React, { PropsWithChildren } from "react";
import { ElementTypeProps } from '../../../utils/theme-util/ThemeUtil';
import GenericButtonComponent, { GenericButtonComponentProps } from "../generic-button";
import FilledButtonWrapper from './FilledButton.wrapper';

export type FilledButtonComponentProps = {
} & ElementTypeProps & GenericButtonComponentProps;

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

export default FilledButtonComponent;