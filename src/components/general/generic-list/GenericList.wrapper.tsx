import styled, { css } from 'styled-components';
import { BoxShadowProps, boxShadowRuleset } from '../../../css-rulesets';

type GenericListWrapperProps = {
    areItemsSelectable?: boolean
} & BoxShadowProps;

const hoverRuleset = css`
    &:hover {
        background: ${props => props.theme.general.hover.background};
        border: ${props => props.theme.general.hover.border};
        color: ${props => props.theme.general.hover.color};
        cursor: pointer;
    }
`;

const GenericListWrapper = styled.div<GenericListWrapperProps>`
    padding: 0.7rem 0.3rem;

    .list-item-wrapper {
        margin: 0;
        background: transparent;
        padding: 0;

        ${props => props.areItemsSelectable ? hoverRuleset : ''}

        &.active-list-item {
            background: #ececec;
        }
    }

    ${boxShadowRuleset}
`;

export default GenericListWrapper;