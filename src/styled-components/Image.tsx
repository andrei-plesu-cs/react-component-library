import styled from 'styled-components'

type ImageProps = {
    objectFit?: 'cover' | 'contain';
}

const Image = styled.img<ImageProps>`
    width: 100%;
    height: 100%;
    object-fit: ${ props => props.objectFit ?? 'cover' };
`;

export default Image;