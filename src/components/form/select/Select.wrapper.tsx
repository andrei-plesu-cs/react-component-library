import styled from 'styled-components';

const SelectWrapper = styled.div`
    position: relative;

    .select-body {
        position: absolute;
        width: 100%;
        margin: 0;
        padding: 0;
        left: 0;
        top: calc(100% + 1rem);
    }

    &:focus {
        outline: none;
    }
`;

export default SelectWrapper;