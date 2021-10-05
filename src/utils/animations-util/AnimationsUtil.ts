import { Keyframes, keyframes } from "styled-components";

export type Animation = 'opacity-scale-bounce' | 'opacity-scale';

export const animationArgsType = {
    options: [ 'opacity-scale-bounce', 'opacity-scale' ],
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
    transformOrigin?: string;
}

const opacityScaleBounce = keyframes`
    0% { transform: scale(0.2); opacity: 0 }
    60% { transform: scale(1.05); opacity: 0.6 }
    100% { transform: scale(1); opacity: 1 }
`;

const opacityScale = keyframes`
    0% { transform: scale(0.1); opacity: 0 }
    100% { transform: scale(1); opacity: 1 }
`;

export class AnimationsUtil {
    static getAnimationByType(animation?: Animation): Keyframes | undefined {
        if (!animation) return;
        
        switch(animation) {
            case 'opacity-scale-bounce':
                return opacityScaleBounce;
            case 'opacity-scale':
                return opacityScale;
        }
    }
}