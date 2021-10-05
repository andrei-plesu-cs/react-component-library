import { Keyframes, keyframes } from "styled-components";

export type Animation = 'animation-1' | 'animation-2';

export const animationArgsType = {
    options: [ 'animation-1', 'animation-2' ],
    control: { type: 'select' }
};

export type AnimationProps = {
    animation?: Animation;
    animationDuration?: string;
    animationDelay?: string;
    animationIterationCount?: string;
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    animationTimingFunction?: string;
    animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both';
    customAnimation?: Keyframes;
}

const animation1 = keyframes`
    0% { transform: scale(0); }
    100% { transform: scale(1); }
`;

export class AnimationsUtil {
    static getAnimationByType(animation: Animation = 'animation-1'): Keyframes {
        switch(animation) {
            case 'animation-1':
                return animation1;
            case 'animation-2':
                return animation1;
        }
    }
}