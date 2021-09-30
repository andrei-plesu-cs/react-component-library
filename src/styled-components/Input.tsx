import styled from 'styled-components';
import { Size, ThemeUtil } from '../utils/theme-util/ThemeUtil';

type InputProps = {
    fontSize?: Size
}

const Input = styled.input<InputProps>`        
    background: transparent;
    box-shadow: none;
    border: none;
    margin: 0;
    padding: 0;
    width: 100%;
    caret-color: ${ props => props.theme.form.color };
    color: ${ props => props.theme.form.color };
    font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.fontSize) };

    &::placeholder {
        color: ${ props => props.theme.form.placeholderColor };
        font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.fontSize) };
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: initial;
    }
`;

export default Input;