import styled from "styled-components";
import { SizeProps, ThemeUtil } from "../../../utils/theme-util/ThemeUtil";

const IconWrapper = styled.div<SizeProps>`
    width: calc( ${ props => ThemeUtil.getDimesionBySizeType(props.size)} * 1.25 );
    height: calc( ${ props => ThemeUtil.getDimesionBySizeType(props.size)} * 1.25 );

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export default IconWrapper;