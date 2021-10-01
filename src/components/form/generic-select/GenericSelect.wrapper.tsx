import styled from 'styled-components';

const GenericSelectWrapper = styled.div`
    position: relative;

    .select-body {
        position: absolute;
        width: 100%;
        margin: 0;
        padding: 0;
        left: 0;
        top: calc(100% + 1rem);
    }

    .disabled-container {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        background: transparent;
        width: 100%;
        height: 100%;
    }

    &:focus {
        outline: none;
    }

    .select-header:focus {
        outline: none;
    }
`;

export default GenericSelectWrapper;