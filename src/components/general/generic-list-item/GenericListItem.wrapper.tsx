import styled from 'styled-components';

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

`;

export default GenericListItemWrapper;