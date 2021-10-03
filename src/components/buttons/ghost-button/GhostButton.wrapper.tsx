import styled from 'styled-components';
import { ElementTypeProps, ThemeUtil } from '../../../utils/theme-util/ThemeUtil';

const GhostButtonWrapper = styled.div<ElementTypeProps>`
    .generic-button-wrapper {
        background: ${ props => ThemeUtil.tone(1, props.theme.buttons[props.elementType ?? 'primary'].primary) };
        color: ${ props => props.theme.buttons[props.elementType ?? 'primary'].primary };
        
        &:hover {
            background: ${ props => ThemeUtil.tone(0.95, props.theme.buttons[props.elementType ?? 'primary'].primary) };
            color: ${ props => props.theme.buttons[props.elementType ?? 'primary'].primary };
        }

        &:active {
            background: ${ props => ThemeUtil.tone(0.8, props.theme.buttons[props.elementType ?? 'primary'].primary) };
            color: ${ props => props.theme.buttons[props.elementType ?? 'primary'].primary };
        }

        &.disabled {
            color: ${ props => ThemeUtil.tone(0.6, props.theme.buttons[props.elementType ?? 'primary'].primary) };
            background: ${ props => ThemeUtil.tone(1, props.theme.buttons[props.elementType ?? 'primary'].primary) };
            cursor: not-allowed;
        }
    }
`;

export default GhostButtonWrapper;