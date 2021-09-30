import styled from 'styled-components';
import { BoxShadowProps, boxShadowRuleset } from '../../../css-rulesets';

const GenericListWrapper = styled.div<BoxShadowProps>`
    .list-item-wrapper {
        margin: 0;
        background: transparent;
        padding: 0;
    }

    ${boxShadowRuleset}
`;

export default GenericListWrapper;