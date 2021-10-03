import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import GenericButtonWrapper from "./GenericButton.wrapper";

export type GenericButtonComponentProps = {
    type?: 'button' | 'submit';
    leadingAreaRenderer?: () => React.ReactNode;
    trailingAreaRenderer?: () => React.ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: (event: any) => void
} & SizeProps;

const GenericButtonComponent = ({
    children,
    type = 'button',
    leadingAreaRenderer,
    trailingAreaRenderer,
    fullWidth = false,
    disabled = false,
    onClick = () => {},
    size = 'medium'
} : PropsWithChildren<GenericButtonComponentProps>) => {

    /** define the return statement bellow */
    return (
        <GenericButtonWrapper
            size={size}
            type={type}
            fullWidth={fullWidth}
            className={classNames({
                'generic-button-wrapper': true,
                'disabled': disabled
            })}
            disabled={disabled}
            onClick={onClick}
        >

            { leadingAreaRenderer ?
                <div className="leading-area-wrapper">
                    {leadingAreaRenderer()}
                </div> : null
            }

            <div className="main-area-wrapper">
                {children}
            </div>

            { trailingAreaRenderer ?
                <div className="trailing-area-wrapper">
                    {trailingAreaRenderer()}
                </div> : null
            }

        </GenericButtonWrapper>
    )

}

export default GenericButtonComponent;