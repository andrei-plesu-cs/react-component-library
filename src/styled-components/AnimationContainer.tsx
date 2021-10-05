import styled from 'styled-components';
import { AnimationProps, AnimationsUtil } from '../utils/animations-util/AnimationsUtil';

const AnimationContainer = styled.div.attrs(() => ({className: 'animation-container'}))<AnimationProps>`
    animation-name: ${props => props.customAnimation ?? AnimationsUtil.getAnimationByType(props.animation)};
    animation-duration: ${props => props.animationDuration ?? '300ms'};
    animation-delay: ${props => props.animationDelay ?? '0'};
    animation-iteration-count: ${props => props.animationIterationCount ?? '1'};
    animation-timing-function: ${props => props.animationTimingFunction ?? 'ease'};
    animation-direction: ${props => props.animationDirection ?? 'initial'};
    animation-fill-mode: ${props => props.animationFillMode ?? 'none'};
    transform-origin: ${props => props.transformOrigin ?? 'initial'};
`;

export default AnimationContainer;