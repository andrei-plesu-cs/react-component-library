import { BoxShadow } from "../../css-rulesets";
import theme from "../../theme"

export type SizeType = 'small' | 'medium' | 'large';

export const sizeArgsType = {
    options: [ 'small', 'medium', 'large' ],
    control: { type: 'select' }
};

export type FontColor = 'primary' | 'secondary';

export type FontColorProps = {
    fontColor?: FontColor
}

export type Size = 'small' | 'medium' | 'large';

export type SizeProps = {
    size?: Size;
}

export type FontType = 'primary' | 'secondary';

export type FontTypeProps = {
    font: FontType;
}

export class ThemeUtil {

    static getDimesionBySizeType(size: SizeType = 'medium'): string {
        switch(size) {
            case 'large':
                return theme.font.fontSize5;
            case 'medium':
                return theme.font.fontSize3;
            case 'small':
                return theme.font.fontSize2;
        }
    }

    static getFontColorByType(fontColor: FontColor): string {
        switch(fontColor) {
            case 'primary':
                return theme.font.fontColorPrimary;
            case 'secondary':
                return theme.font.fontColorSecondary;
        }
    }

    static getBoxShadowByType(boxShadow?: BoxShadow): string {
        if (!boxShadow) return '';

        switch(boxShadow) {
            case 'box-shadow-1':
                return theme.boxShadows.boxShadow1;
            case 'box-shadow-2':
                return theme.boxShadows.boxShadow2;
            case 'box-shadow-3':
                return theme.boxShadows.boxShadow3;
            case 'box-shadow-4':
                return theme.boxShadows.boxShadow4;
            case 'box-shadow-5':
                return theme.boxShadows.boxShadow5;
        }
    }

    static getFontByType(fontType: FontType): string {
        switch(fontType) {
            case 'primary':
                return theme.font.fontPrimary;
            case 'secondary':
                return theme.font.fontSecondary;
        }
    }

}