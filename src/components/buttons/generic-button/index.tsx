import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import GenericButtonWrapper from "./GenericButton.wrapper";

/** component props definition */
export type GenericButtonComponentProps = {
    /** Type of the underlaying button component, which is a native html attribute */
    type?: 'button' | 'submit';

    /** Renders content before the main text of the button. Might be used to render an
     * icon for example
     */
    leadingAreaRenderer?: () => React.ReactNode;

    /** Renders content after the main text of the button. Might be used to render an
     * icon for example
     */
    trailingAreaRenderer?: () => React.ReactNode;

    /** Indicates wheter the button should take all the available space or not. Simply
     * sets width: 100%, so it fills the available space
     */
    fullWidth?: boolean;

    /** Indicates wheter the button is disabled or not. Also adds styled to the button wrapper */
    disabled?: boolean;

    /** Signals the parent component that the button has been pressed */
    onClick?: (event: any) => void;
} & SizeProps;

/**
 * Generic button component, with some generic styles. Should be extanded by other components
 * to fit particular UI cases, like filled buttons, hollow buttons or shadow buttons etc
 * 
 * @component
 */
const GenericButtonComponent = ({
    children,
    type = 'button',
    leadingAreaRenderer,
    trailingAreaRenderer,
    fullWidth = false,
    disabled = false,
    onClick = () => {},
    size = 'medium'
} : PropsWithChildren<GenericButtonComponentProps>) => {

    /** define the return statement bellow */
    return (
        <GenericButtonWrapper
            size={size}
            type={type}
            fullWidth={fullWidth}
            className={classNames({
                'generic-button-wrapper': true,
                'disabled': disabled
            })}
            disabled={disabled}
            onClick={onClick}
        >

            { leadingAreaRenderer ?
                <div className="leading-area-wrapper">
                    {leadingAreaRenderer()}
                </div> : null
            }

            <div className="main-area-wrapper">
                {children}
            </div>

            { trailingAreaRenderer ?
                <div className="trailing-area-wrapper">
                    {trailingAreaRenderer()}
                </div> : null
            }

        </GenericButtonWrapper>
    )

}

/** export the components */
export default GenericButtonComponent;