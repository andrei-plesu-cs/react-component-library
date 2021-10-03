import classNames from "classnames";
import { isEmpty } from "lodash";
import React, { useCallback } from "react";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import FontAwesomeIconComponent from "../../general/font-awesome-icon";
import IconComponent from "../../general/icon";
import GenericButtonComponent from "../generic-button";
import IconButtonWrapper from "./IconButton.wrapper";

/** component props definition */
export type IconButtonComponentProps = {
    /** The color of the button. Is used in combination with the 'tint' method from
     * 'polished' library to create tints of the color for different states of the component
     */
    color?: string;

    /** The source of the image, either base64 or  */
    iconSrc?: string;

    /** Used for the alt attribute of the native img tag */
    iconAlt?: string;

    /** Indicates wheter the imageSrc passed as prop is a font awesome
     * compliant icon or not, so it knows what to render next
     */
    isFontAwesomeIcon?: boolean;

    /** If true, sets a border-radius of 50% on the generic button wrapper */
    rounded?: boolean;

    /** Indicates wheter the underlaying native button is disabled or not. Also
     * adds additional styles to the component
     */
    disabled?: boolean;

    /** Signals the parent when the button has been clicked */
    onClick?: (event: any) => void;
} & SizeProps;

/**
 * Renders a simple icon into the generic button component. Depending on the iconSrc might
 * render a font awesome icon or an SVG into the underlaying generic component
 * 
 * @component
 */
const IconButtonComponent = ({
    color = '#000',
    size = 'medium',
    iconSrc = '',
    iconAlt = '',
    isFontAwesomeIcon = false,
    rounded = false,
    onClick = () => {},
    disabled = false
}: IconButtonComponentProps) => {

    /** DEFINE THE HANDLERS BELLOW */

    /** Decides what to render depending on the props */
    const renderButtonContents = useCallback(
        () => {
            if (isEmpty(iconSrc)) return null;

            if (!isFontAwesomeIcon)
                return (
                    <IconComponent
                        iconSrc={iconSrc}
                        iconAlt={iconAlt}
                        size={size}
                        color={color}
                    />
                )
            else
                return (
                    <FontAwesomeIconComponent
                        iconSrc={iconSrc}
                        color={color}
                    />
                )
        },
        [iconSrc, isFontAwesomeIcon, iconAlt, size, color]
    );


    /** define the return statement bellow */
    return (
        <IconButtonWrapper
            size={size}
            color={color}
            className={classNames({ 
                'icon-button-wrapper': true, 
                'rounded': rounded 
            })}
        >
            <GenericButtonComponent
                size={size}
                onClick={onClick}
                disabled={disabled}
            >
                {renderButtonContents()}
            </GenericButtonComponent>  
        </IconButtonWrapper>
    )

}

/** export the component */
export default IconButtonComponent;