import styled from 'styled-components';
import { SizeProps, ThemeUtil } from '../../../utils/theme-util/ThemeUtil';

const AvatarWrapper = styled.div<SizeProps>`
    width: calc( ${ props => ThemeUtil.getDimesionBySizeType(props.size) } * 2 );
    height: calc( ${ props => ThemeUtil.getDimesionBySizeType(props.size) } * 2 );
    border-radius: 50%;
    overflow: hidden;
`;

export default AvatarWrapper;