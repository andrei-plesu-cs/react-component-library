import styled, { css } from 'styled-components';
import { SizeProps, ThemeUtil } from '../../../utils/theme-util/ThemeUtil';

const normalRuleset = css`
    background: ${props => props.theme.form.formBox.normal.background};
    border-radius: ${props => props.theme.form.formBox.normal.borderRadius};
    border: ${props => props.theme.form.formBox.normal.border};
    padding: ${props => props.theme.form.formBox.normal.padding};
`;

const focusRuleset = css`
    background: ${props => props.theme.form.formBox.focus.background};
    border-radius: ${props => props.theme.form.formBox.focus.borderRadius};
    border: ${props => props.theme.form.formBox.focus.border};
    padding: ${props => props.theme.form.formBox.focus.padding};
`;

const hoverRuleset = css`
    background: ${props => props.theme.form.formBox.hover.background};
    border-radius: ${props => props.theme.form.formBox.hover.borderRadius};
    border: ${props => props.theme.form.formBox.hover.border};
    padding: ${props => props.theme.form.formBox.hover.padding};
`;

const disabledRuleset = css`
    background: ${props => props.theme.form.formBox.disabled.background};
    border-radius: ${props => props.theme.form.formBox.disabled.borderRadius};
    border: ${props => props.theme.form.formBox.disabled.border};
    padding: ${props => props.theme.form.formBox.disabled.padding};
    cursor: not-allowed;

    &:hover {
        background: ${props => props.theme.form.formBox.disabled.background};
        border-radius: ${props => props.theme.form.formBox.disabled.borderRadius};
        border: ${props => props.theme.form.formBox.disabled.border};
        padding: ${props => props.theme.form.formBox.disabled.padding};
    }
`;

const invalidRuleset = css`
    border: ${props => props.theme.form.general.invalid.border};
`;

const GenericFormBoxWrapper = styled.div<SizeProps>`

    .form-box-body {
        display: flex;
        align-items: center;
        position: relative;
        font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.size) };

        ${normalRuleset}

        &:hover {
            ${hoverRuleset}
        }
        
        &.focused {
            ${focusRuleset}
        }

        &.invalid {
            ${invalidRuleset}
        }

        &.disabled {
            ${disabledRuleset}
        }

        .middle-area-wrapper {
            flex: 1;
        }
    }

`;

export default GenericFormBoxWrapper;