import React from 'react';
import { SizeProps } from '../../../utils/theme-util/ThemeUtil';
import FontAwesomeIconWrapper from './FontAwesomeIcon.wrapper';

export type FontAwesomeIconComponentProps = {
    color?: string;
    iconSrc?: string;
} & SizeProps;

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

export default FontAwesomeIconComponent;