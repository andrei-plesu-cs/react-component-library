import { css } from "styled-components";
import theme from "./theme";
import { ThemeUtil } from "./utils/theme-util/ThemeUtil";

export type BoxShadow = 'box-shadow-1' | 'box-shadow-2' | 'box-shadow-3' | 'box-shadow-4' | 'box-shadow-5';

export type BoxShadowProps = {
    boxShadow?: BoxShadow
}

export const boxShadowRuleset = css<BoxShadowProps>`
    box-shadow: ${ props => ThemeUtil.getBoxShadowByType(props.boxShadow) };
`;

export type HoverProps = {
    withHover?: boolean;
    hoverBackground?: string;
    duration?: number;
    withPointerCursor?: boolean;
};

const innerHoverRuleset = css<HoverProps>`
    background: ${ props => props.hoverBackground ?? theme?.general?.hoverBackgroundColor };
    cursor: ${ props => (props.withPointerCursor ?? true) ? 'pointer' : 'initial' };
`;

export const hoverRuleset = css<HoverProps>`
    transition: background ${ props => props.duration ?? 150 }ms;

    &:hover {
        ${ props => props.withHover ? innerHoverRuleset : ''}
    }
`;

export type DimensionsProps = {
    width?: string;
    height?: string;
    maxHeight?: string;
    maxWidth?: string;
}

export const dimensionsRuleset = css<DimensionsProps>`
    width: ${ props => props.width ?? '100%' };
    height: ${ props => props.height ?? '100%' };
    max-height: ${ props => props.maxHeight ?? 'initial' };
    max-width: ${ props => props.maxWidth ?? 'initial' };
`;