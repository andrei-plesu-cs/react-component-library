import React, { useEffect, useState, useCallback } from 'react';
import Input from '../../../styled-components/Input';
import InputWrapper from './Input.wrapper';
import { SizeProps } from '../../../utils/theme-util/ThemeUtil';
import ErrorMessage from '../../../styled-components/ErrorMessage';
import GenericFormBoxComponent from '../generic-form-box';
import { BasicFormElementControls, ControllableFormElement } from '../../../utils/form-utils/FormUtils';

export type InputComponentProps = {
    placeholder?: string;
    type?: 'text' | 'number' | 'password';
} & SizeProps & ControllableFormElement<string> & BasicFormElementControls<string>;

/**
 * Simple input component
 * 
 * @component
 * 
 * @param {Object} props
 * @param {string} props.placeholder placeholder of the input
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

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);


    /** DEFINE THE EFFECTS BELLOW */

    useEffect(() => {
        if (inputValue === undefined) return;
        onChange(inputValue);
    }, [inputValue, controlled, onChange]);


    /** DEFINE THE HANDLERS BELLOW */

    const onFocusHandler = useCallback(
        (): void => {
            setIsFocused(() => true);
            onFocus();
        },
        [onFocus, setIsFocused]
    )

    const onBlurHandler = useCallback(
        (): void => {
            setIsFocused(() => false);
            onBlur();
        },
        [onBlur, setIsFocused]
    ) 

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

    const getInputValue = useCallback(
        () => {
            if (controlled)
                return value || '';
            return inputValue || '';
        },
        [inputValue, value, controlled]
    );

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

export default InputComponent;