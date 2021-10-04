import styled from 'styled-components';
import { SizeProps, ThemeUtil } from '../../../utils/theme-util/ThemeUtil';

const GenericFormBoxWrapper = styled.div<SizeProps>`

    .form-box-body {
        padding: ${ props => props.theme.form.padding };
        border: ${ props => props.theme.form.border };
        background: ${ props => props.theme.form.backgroundColor };
        border-radius: ${ props => props.theme.form.borderRadius };
        display: flex;
        align-items: center;
        position: relative;
        font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.size) };
        
        &:hover {
            border: ${ props => props.theme.form.hoverBorder };
        }

        &.focused {
            border: ${ props => props.theme.form.focusBorder};
        }

        &.invalid {
            border: ${ props => props.theme.form.general.invalid.border };
        }

        &.disabled {
            cursor: not-allowed;
            border: ${ props => props.theme.form.disabledBorder };
            background: ${ props => props.theme.form.disabledBackgroundColor };

            &:hover {
                border: ${ props => props.theme.form.disabledBorder };
                background: ${ props => props.theme.form.disabledBackgroundColor };
            }
        }

        .middle-area-wrapper {
            flex: 1;
        }
    }

`;

export default GenericFormBoxWrapper;