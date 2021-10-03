import styled from 'styled-components';
import { ElementTypeProps, ThemeUtil } from '../../../utils/theme-util/ThemeUtil';

const FilledButtonWrapper = styled.div<ElementTypeProps>`
    .generic-button-wrapper {
        background: ${ props => props.theme.buttons[props.elementType ?? 'primary'].primary };
        color: ${ props => props.theme.buttons[props.elementType ?? 'primary'].accent };
        
        &:hover {
            background: ${ props => ThemeUtil.tone(0.15, props.theme.buttons[props.elementType ?? 'primary'].primary) };
            color: ${ props => props.theme.buttons[props.elementType ?? 'primary'].accent };
        }

        &:active {
            background: ${ props => ThemeUtil.tone(0.4, props.theme.buttons[props.elementType ?? 'primary'].primary) };
            color: ${ props => props.theme.buttons[props.elementType ?? 'primary'].accent };
        }

        &.disabled {
            background: ${ props => ThemeUtil.tone(0.4, props.theme.buttons[props.elementType ?? 'primary'].primary) };
            color: ${ props => props.theme.buttons[props.elementType ?? 'primary'].accent };
            cursor: not-allowed;
        }
    }
`;

export default FilledButtonWrapper;