import styled from 'styled-components';
import { Size, ThemeUtil } from '../../../utils/theme-util/ThemeUtil';

const getPaddingBySizeType = (size: Size) => {
    switch(size) {
        case 'small':
            return '0.4rem';
        case 'medium':
            return '0.7rem';
        case 'large':
            return '1rem';
    }
}

type IconButtonWrapperProps = {
    color?: string;
    size?: Size;
}

const IconButtonWrapper = styled.div<IconButtonWrapperProps>`
    .generic-button-wrapper {
        background: ${ props => ThemeUtil.tone(1, props.color ?? '#000') };
        color: ${ props => props.color ?? '#000' };
        padding: ${ props => getPaddingBySizeType(props.size ?? 'small') };

        &:hover {
            background: ${ props => ThemeUtil.tone(0.95, props.color ?? '#000') };
            color: ${ props => props.color ?? '#000' };
        }

        &:active {
            background: ${ props => ThemeUtil.tone(0.8, props.color ?? '#000') };
            color: ${ props => props.color ?? '#000' };
        }

        &.disabled {
            color: ${ props => ThemeUtil.tone(0.6, props.color ?? '#000') };
            background: ${ props => ThemeUtil.tone(1, props.color ?? '#000') };
            cursor: not-allowed;
        }
    }

    &.rounded {
        .generic-button-wrapper {
            border-radius: 50%;
        } 
    }
`;

export default IconButtonWrapper;