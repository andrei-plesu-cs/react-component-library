import React, { useEffect, useState, useCallback } from 'react';
import Input from '../../../styled-components/Input';
import InputWrapper from './Input.wrapper';
import { SizeProps } from '../../../utils/theme-util/ThemeUtil';
import ErrorMessage from '../../../styled-components/ErrorMessage';
import GenericFormBoxComponent from '../generic-form-box';
import { BasicFormElementControls, ControllableFormElement } from '../../../utils/form-utils/FormUtils';

/** component props definition */
export type InputComponentProps = {
    /** The placeholder of the underlaying input */
    placeholder?: string;

    /** The type of the underlaying input */
    type?: 'text' | 'number' | 'password';
} & SizeProps & ControllableFormElement<string> & BasicFormElementControls<string>;

/**
 * Input component built on top of the GenericFormBox component, so it supports visual feedback
 * for invalid, disabled, hover, focused etc states.
 * 
 * Also, could be uncontrolled, it its state is mantained internally or could be controlled from
 * the parent component, in which case the parent is responsible for updating the state of the
 * component.
 * 
 * Supports everything that GenericFormBox component supports, including trailing or leading
 * elements.
 * 
 * @component
 */
const InputComponent = ({
    placeholder = '',
    disabled = false,
    isInvalid = false,
    size = 'medium',
    errorMessage = '',
    onChange = (newValue: string) => {},
    value = '',
    controlled = false,
    type = 'text',
    onFocus = () => {},
    onBlur = () =>{}
}: InputComponentProps) => {


    /** DEFINE THE STATE BELLOW */

    /** Indicated wheter the component is focused or not */
    const [isFocused, setIsFocused] = useState(false);

    /** Holds the state of the underlaying input. Is used only if the component is
     * uncontrolled. Otherwise, the state id controlled from the parent by the 'value' prop
     */
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);


    /** DEFINE THE EFFECTS BELLOW */

    /** Signals the parent component when the state is updated by calling the onChange
     * callback
     */
    useEffect(() => {
        if (inputValue === undefined) return;
        onChange(inputValue);
    }, [inputValue, controlled, onChange]);


    /** DEFINE THE HANDLERS BELLOW */

    /** Gets called when the input component is brought into focus and updates the focus state,
     * while also signaling the parent of the change
     */
    const onFocusHandler = useCallback(
        (): void => {
            setIsFocused(() => true);
            onFocus();
        },
        [onFocus, setIsFocused]
    )

    /** Gets called when the input component is brought out of focus and updates the focus state,
     * while also signaling the parent of the change
     */
    const onBlurHandler = useCallback(
        (): void => {
            setIsFocused(() => false);
            onBlur();
        },
        [onBlur, setIsFocused]
    ) 

    /** Gets called when a the state of the component changes. If it is controlled, then it
     * signals the parent of the change and expects the parent to pass in the updated value
     * through the 'value' prop. If it is uncontrolled, it updates the internal state value
     */
    const onChangeHandler = useCallback(
        (newValue: string) => {
            if (controlled) {
                onChange(newValue);
            }
            else {
                setInputValue(() => newValue as any);
            }
        },
        [controlled, onChange]
    ) 

    /** Decides what to display in the input depending on wheter the component is controlled
     * or not. If controlled, it displays the value provided by the parent through props.
     * Otherwise, it displays the state stored internally
     */
    const getInputValue = useCallback(
        () => {
            if (controlled)
                return value || '';
            return inputValue || '';
        },
        [inputValue, value, controlled]
    );

    /** Displays the error message provided by the parent through props, if any */
    const errorRenderer = useCallback(
        () => {
            return (
                <ErrorMessage data-testid="error-container">
                    {errorMessage}
                </ErrorMessage> 
            )

        },
        [errorMessage]
    )

    /** Displays the input in the middle area of the GenericFormBox component. It is a
     * function because the GenericFormBox component renders parts using the render prop
     * pattern
     */
    const middleAreaRenderer = useCallback(
        () => {
            return (
                <Input
                    fontSize={size}
                    data-testid="input"
                    type={type}
                    disabled={disabled}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onChange={e => onChangeHandler(e.target.value)}
                    value={getInputValue()}
                    placeholder={placeholder}
                />
            )
        },
        [type, disabled, onFocusHandler, onBlurHandler, onChangeHandler, getInputValue, placeholder, size]
    )


    /** define the return statement bellow */
    return (
        <InputWrapper>
            <GenericFormBoxComponent
                isDisabled={disabled}
                isInvalid={isInvalid}
                isFocused={isFocused}
                errorRenderer={(errorMessage && isInvalid) ? errorRenderer : undefined}
                middleAreaRenderer={middleAreaRenderer}
            />
        </InputWrapper>
        
    )

}

/** export the component */
export default InputComponent;