import styled from 'styled-components';
import { SizeProps, ThemeUtil } from '../utils/theme-util/ThemeUtil';

const ErrorMessage = styled.p<SizeProps>`
    color: ${ props => props.theme.form.invalidColor };
    margin: 0.5rem 0rem;
    font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.size || 'small') };
`;

export default ErrorMessage;