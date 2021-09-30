import classNames from "classnames";
import React from "react";
import MockAbsoluteContainer from "../../../styled-components/MockAbsoluteContainer";
import GenericFormBoxWrapper from "./GenericFormBox.wrapper";

export type GenericFormBoxComponentProps = {
    leftAreaRenderer?: () => React.ReactNode,
    middleAreaRenderer?: () => React.ReactNode,
    rightAreaRenderer?: () => React.ReactNode,
    errorRenderer?: () => React.ReactNode;
    isFocused?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
}

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