import styled from 'styled-components';
import { hoverRuleset } from '../../../css-rulesets';

const GenericListItemWrapper = styled.div`

    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    .left-section {
        margin-right: 1rem;
    }

    .middle-section {
        flex: 1;
    }

    .right-section {
        margin-left: 1rem;
    }

    ${ hoverRuleset }

`;

export default GenericListItemWrapper;