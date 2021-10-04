import styled, { css } from 'styled-components';

type DividerWrapperProps = {
    color?: string;
    noSpace?: boolean;
    hiddenContent?: boolean;
}

const hiddenContentRuleset = css`
    .divider-middle-area-wrapper, .divider-line {
        display: none;
    }
`;

const DividerWrapper = styled.div<DividerWrapperProps>`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: ${props => !(props.noSpace ?? false) && props.theme.general.divider.space};
    margin-bottom: ${props => !(props.noSpace ?? false) && props.theme.general.divider.space};

    .divider-middle-area-wrapper {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .divider-line {
        flex: 1;
        background: ${props => props.color ?? props.theme.general.divider.background};
        height: ${props => props.theme.general.divider.size};
    }

    ${ props => props.hiddenContent ? hiddenContentRuleset : '' }
`;

export default DividerWrapper;