import classNames from "classnames";
import React from "react";
import MockAbsoluteContainer from "../../../styled-components/MockAbsoluteContainer";
import GenericFormBoxWrapper from "./GenericFormBox.wrapper";

/** component props definition */
export type GenericFormBoxComponentProps = {
    
    leftAreaRenderer?: () => React.ReactNode,
    middleAreaRenderer?: () => React.ReactNode,
    rightAreaRenderer?: () => React.ReactNode,
    errorRenderer?: () => React.ReactNode;
    isFocused?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
}

/**
 * Represents a base component for form elements that require a box, such as input, textarea and
 * different types of selects (single-select, multi-select etc).
 * 
 * Supports visual feedback for invalid state, disabled state, hover state and focus state, and the
 * styles are used directly from the theme file.
 * 
 * It is generic and presentational (dumb component), in that all its contents are rendered using
 * render prop pattern so it could be easily customised to fit all use cases
 * 
 * @component
 */
const GenericFormBoxComponent = ({
    leftAreaRenderer,
    middleAreaRenderer,
    rightAreaRenderer,
    errorRenderer,
    isFocused = false,
    isDisabled = false,
    isInvalid = false,
}: GenericFormBoxComponentProps) => {

    /** define the return statement bellow */
    return (
        <GenericFormBoxWrapper 
            className="generic-form-box-wrapper"
        >
            
            <div
                className={classNames({
                    'form-box-body': true,
                    'focused': isFocused,
                    'invalid': isInvalid,
                    'disabled': isDisabled
                })}
            >

                { isDisabled ? <MockAbsoluteContainer data-testid="disabled-container" /> : null }

                {
                    leftAreaRenderer ?
                    <div className="left-area-wrapper">
                        {leftAreaRenderer()}
                    </div> : null
                }

                {
                    middleAreaRenderer ?
                    <div className="middle-area-wrapper">
                        {middleAreaRenderer()}
                    </div> : null
                }

                {
                    rightAreaRenderer ?
                    <div className="right-area-wrapper">
                        {rightAreaRenderer()}
                    </div> : null
                }

            </div>

            {
                errorRenderer ?
                <div className="error-area-wrapper">
                    {errorRenderer()}
                </div> : null
            }

        </GenericFormBoxWrapper>
    )

}

export default GenericFormBoxComponent;