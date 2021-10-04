import styled from 'styled-components';
import { Size, ThemeUtil } from '../utils/theme-util/ThemeUtil';

type TextareaProps = {
    fontSize?: Size;
}

const Textarea = styled.textarea<TextareaProps>`        
    background: transparent;
    box-shadow: none;
    border: none;
    margin: 0;
    padding: 0;
    width: 100%;
    caret-color: ${ props => props.theme.form.textarea.carretColor };
    color: ${ props => props.theme.form.textarea.color };
    font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.fontSize) };
    height: ${ props => props.theme.form.textarea.contentHeight }; 
    font-family: ${props => props.theme.font.fontPrimary};

    &::placeholder {
        color: ${ props => props.theme.form.textarea.placeholderColor };
        font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.fontSize) };
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: initial;
    }
`;

export default Textarea;