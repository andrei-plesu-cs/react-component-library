import styled from 'styled-components';
import { hoverRuleset } from '../../../css-rulesets';

const ListItemWrapper = styled.div`

    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    .left-section {
        margin-right: 1rem;
    }

    ${ hoverRuleset }

`;

export default ListItemWrapper;