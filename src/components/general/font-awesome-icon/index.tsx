import React from 'react';
import { SizeProps } from '../../../utils/theme-util/ThemeUtil';
import FontAwesomeIconWrapper from './FontAwesomeIcon.wrapper';

/** component props definition */
export type FontAwesomeIconComponentProps = {
    /** Color of the icon */
    color?: string;

    /** Should be set to the same class that gets displayed in the font awesome
     * website, to load the icon correctly
     */
    iconSrc?: string;
} & SizeProps;

/**
 * Encapsulates a font awesome icon that is passed by the class name as prop.
 * Defines additional props that control the aspect of the icon.
 * 
 * @component
 */
const FontAwesomeIconComponent = ({
    size = 'medium',
    color,
    iconSrc = ''
}: FontAwesomeIconComponentProps) => {

    /** define the return statement */
    return (
        <FontAwesomeIconWrapper
            data-testid="font-awesome-icon"
            color={color}
            size={size}
            className={`font-awesome-icon-wrapper ${iconSrc}`}
        />
    )

}

/** export the component */
export default FontAwesomeIconComponent;