import classNames from "classnames";
import { isEmpty } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import ErrorMessage from "../../../styled-components/ErrorMessage";
import { BasicFormElementControls, ControllableFormElement } from "../../../utils/form-utils/FormUtils";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import CheckboxWrapper from "./Checkbox.wrapper";

/** component props definition */
export type CheckboxComponentProps = {
    /** The text displayed after the checkmark box. Can be ommited */
    text?: string
} & ControllableFormElement<boolean> & BasicFormElementControls<boolean> & SizeProps;

/**
 * Simple checkbox component. Could be controllable, in which case the parent component has to provide
 * the value, and must listen to value changes from the component. Otherwise, the component will keep track
 * of the value through an internal state
 * 
 * @component
 */
const CheckboxComponent = ({
    value = false,
    onChange = (newValue: boolean) => {},
    controlled = false,
    text,
    size = 'medium',
    disabled = false,
    isInvalid = false,
    errorMessage = ''
}: CheckboxComponentProps) => {

    /** DEFINE THE STATE BELLOW */

    /** Keeps the state of the inner checkbox input and only has effect if the component is not controlled */
    const [valueState, setValueState] = useState<boolean | undefined>(undefined);


    /** DEFINE THE EFFECTS BELLOW */

    /** Signals the parent component about changes in the state of the input. This effect enters only
     * if the component is not controlled
     */
    useEffect(
        () => {
            if (valueState === undefined) return;
            onChange(valueState);
        },
        [valueState, onChange]
    )


    /** DEFINE THE HANDLERS BELLOW */

    /** Returns the current value of the input checked state, depending on wheter the component is
     * controlled or not. If controlled, the value will be provided through props. If not controlled,
     * then the value will be provided through the inner props
     */
    const getValue = useCallback(
        () => {
            let selectedValue = controlled ? value : valueState;
            return selectedValue ?? false;
        },
        [controlled, value, valueState]
    );

    /** Gets called when the value of the inner input component changes. Depending on the controlled prop,
     * will call the parent component to keep track of the change or update the inner state
     */
    const onChangeHandler = useCallback(
        (event: any) => {
            let newValue = event.target.checked;
            
            if (controlled)
                onChange(newValue);
            else
                setValueState(newValue);
        },
        [controlled, onChange, setValueState]
    )


    /** define the return statement bellow */
    return (
        <CheckboxWrapper 
            className='checkbox-wrapper'
            checked={getValue()} 
            size={size}
        >
            <label 
                className={classNames({
                    'disabled': disabled,
                    'invalid': isInvalid,
                    'checked': getValue()
                })}
            >
                <div className="checkbox-container">
                    <input
                        className="hidden-checkbox"
                        disabled={disabled}
                        type="checkbox"
                        checked={getValue()}
                        onChange={onChangeHandler}
                    />
                    <div className="checkbox">
                        <svg className="icon" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                </div>
                
                { !isEmpty(text) ? <span className="checkbox-text">{text}</span> : null } 
            </label>

            {
                (errorMessage && isInvalid) ?
                <div className="error-area-wrapper">
                    <ErrorMessage data-testid="error-container">
                        {errorMessage}
                    </ErrorMessage> 
                </div> : null
            }
        </CheckboxWrapper>
    )

}

/** export the component */
export default CheckboxComponent;