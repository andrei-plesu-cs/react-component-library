import styled, { css } from 'styled-components';
import { Size, ThemeUtil } from '../../../utils/theme-util/ThemeUtil';

type CheckboxWrapperProps = {
    checked?: boolean;
    size?: Size;
}

const uncheckedRuleset = css`
    background: ${props => props.theme.form.checkbox.unchecked.background};
    border-radius: ${props => props.theme.form.checkbox.unchecked.borderRadius};
    border: ${props => props.theme.form.checkbox.unchecked.border};
`;

const checkedRuleset = css<CheckboxWrapperProps>`
    background: ${props => props.theme.form.checkbox.checked.background};
    border-radius: ${props => props.theme.form.checkbox.checked.borderRadius};
    border: ${props => props.theme.form.checkbox.checked.border};

    .icon {
        stroke: ${props => props.theme.form.checkbox.checked.checkmarkColor};
    }
`;

const hoverRuleset = css<CheckboxWrapperProps>`
    background: ${props => props.theme.form.checkbox.hover.background};
    border-radius: ${props => props.theme.form.checkbox.hover.borderRadius};
    border: ${props => props.theme.form.checkbox.hover.border};

    .icon {
        stroke: ${props => props.theme.form.checkbox.hover.checkmarkColor};
    }
`;

const disabledRuleset = css<CheckboxWrapperProps>`
    background: ${props => props.theme.form.checkbox.disabled.background};
    border-radius: ${props => props.theme.form.checkbox.disabled.borderRadius};
    border: ${props => props.theme.form.checkbox.disabled.border};

    .icon {
        stroke: ${props => props.theme.form.checkbox.disabled.checkmarkColor};
    }
`;

const invalidRuleset = css<CheckboxWrapperProps>`
    border: ${props => props.theme.form.general.invalid.border};
`;

const CheckboxWrapper = styled.div<CheckboxWrapperProps>`
    display: inline-block;

    label {
        display: flex;
        align-items: center;

        .checkbox-text {
            margin-left: 0.5rem;
            font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.size) };
        }

        .checkbox-container {
            display: flex;
            align-items: center;

            .hidden-checkbox {
                border: 0;
                clip: rect(0 0 0 0);
                clippath: inset(50%);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                white-space: nowrap;
                width: 1px;
            }

            .checkbox {
                width: calc(${ props => ThemeUtil.getDimesionBySizeType(props.size) } * 1.35);
                height: calc(${ props => ThemeUtil.getDimesionBySizeType(props.size) } * 1.35);
                transition: all 150ms;
                display: flex;
                align-items: center;
                justify-content: center;

                ${uncheckedRuleset}

                .icon {
                    width: 80%;
                    height: 80%;
                    fill: none;
                    stroke-width: 4px;
                    visibility: ${props => props.checked ? 'visible' : 'hidden'}
                }
            }
        }

        &:hover .checkbox {
            ${hoverRuleset}
        }

        &.checked .checkbox {
            ${checkedRuleset}
        }

        &.disabled {
            cursor: not-allowed;

            .checkbox {
                ${disabledRuleset}
            }   
        }

        &.invalid .checkbox {
            ${invalidRuleset}
        }
    }

    
`;

export default CheckboxWrapper;