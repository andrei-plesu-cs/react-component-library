import styled from 'styled-components';
import Button from '../../../styled-components/Button';
import { Size, SizeProps } from '../../../utils/theme-util/ThemeUtil';

const getPaddingBySizeType = (size: Size) => {
    switch(size) {
        case 'small':
            return '0.4rem 1.2rem';
        case 'medium':
            return '0.7rem 1.2rem';
        case 'large':
            return '1rem 1.2rem'
    }
}

type GenericButtonWrapperProps = {
    fullWidth?: boolean;
} & SizeProps;

const GenericButtonWrapper = styled(Button)<GenericButtonWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${ props => getPaddingBySizeType(props.size ?? 'small') };
    border-radius: 6px;
    width: ${ props => props.fullWidth ? '100%' : 'initial' };
    cursor: pointer;
    transition: all 150ms;
    text-transform: uppercase;
    font-weight: 600;
`;

export default GenericButtonWrapper;