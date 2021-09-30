import styled from 'styled-components';
import { dimensionsRuleset } from '../../../css-rulesets';

const ScrollableContainerWrapper = styled.div`
    margin: 0;
    padding: 0;
    overflow-y: auto;

    ${ dimensionsRuleset }
`;

export default ScrollableContainerWrapper;