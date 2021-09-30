import styled from 'styled-components';
import { FontColorProps, SizeProps, ThemeUtil } from '../utils/theme-util/ThemeUtil';

export type TextProps = SizeProps & FontColorProps;

const Text = styled.p<TextProps>`
    font-size: ${ props => ThemeUtil.getDimesionBySizeType(props.size || 'medium') };
    color: ${ props => ThemeUtil.getFontColorByType(props.fontColor || 'primary') };
    line-height: 1rem;
    margin: 0.2rem 0;
    padding: 0;
`;

export default Text;