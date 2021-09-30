import styled from 'styled-components';
import { SizeProps, ThemeUtil } from '../../../utils/theme-util/ThemeUtil';

type FontAwesomeIconWrapperProps = {
    color?: string;
} & SizeProps;

const FontAwesomeIconWrapper = styled.i<FontAwesomeIconWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.size) };
    color: ${ props => props.size ?? props.theme.fontColorPrimary };
`;

export default FontAwesomeIconWrapper;