import React from "react";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import IconWrapper from "./Icon.wrapper";

/** component props definition */
export type IconComponentProps = {
    /** base64 string representing the source of the rendered icon */
    iconSrc: string;

    /** value of the alt attribute on the underlaying img tag */
    iconAlt: string;

    /** the color of the icon */
    color?: string;
} & SizeProps;

/**
 * Simple component that renders an SVG or PNG/JPEG icon into an underlaying
 * img native element
 * 
 * @component
 */
const IconComponent = ({
    iconSrc = '',
    iconAlt = '',
    size = 'medium',
    color = '#000'
}: IconComponentProps) => {

    /** define the return statement bellow */
    return (
       <IconWrapper size={size} className="icon-wrapper">
           <img src={iconSrc} alt={iconAlt} />
       </IconWrapper> 
    )

}

/** export the component */
export default IconComponent;