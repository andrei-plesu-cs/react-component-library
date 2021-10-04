import React, {useState, useCallback, useEffect} from "react";
import ErrorMessage from "../../../styled-components/ErrorMessage";
import Textarea from "../../../styled-components/Textarea";
import { BasicFormElementControls, ControllableFormElement } from "../../../utils/form-utils/FormUtils";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import GenericFormBoxComponent from "../generic-form-box";
import TextareaWrapper from "./Textarea.wrapper";

/** component props definition */
export type TextAreaComponentProps = {
    /** The placeholder of the underlaying input */
    placeholder?: string;
} & SizeProps & ControllableFormElement<string> & BasicFormElementControls<string>;

const TextAreaComponent = ({
    placeholder = '',
    disabled = false,
    isInvalid = false,
    size = 'medium',
    errorMessage = '',
    onChange = (newValue: string) => {},
    value = '',
    controlled = false,
    onFocus = () => {},
    onBlur = () =>{}
}: TextAreaComponentProps) => {


    /** DEFINE THE STATE BELLOW */

    /** Indicated wheter the component is focused or not */
    const [isFocused, setIsFocused] = useState(false);

    /** Holds the state of the underlaying input. Is used only if the component is
     * uncontrolled. Otherwise, the state id controlled from the parent by the 'value' prop
     */
    const [textareaValue, setTextareaValue] = useState<string | undefined>(undefined);


    /** DEFINE THE EFFECTS BELLOW */

    /** Signals the parent component when the state is updated by calling the onChange
     * callback
     */
    useEffect(() => {
        if (textareaValue === undefined) return;
        onChange(textareaValue);
    }, [textareaValue, controlled, onChange]);


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
                setTextareaValue(() => newValue as any);
            }
        },
        [controlled, onChange]
    ) 

    /** Decides what to display in the input depending on wheter the component is controlled
     * or not. If controlled, it displays the value provided by the parent through props.
     * Otherwise, it displays the state stored internally
     */
    const getTextareaValue = useCallback(
        () => {
            if (controlled)
                return value || '';
            return textareaValue || '';
        },
        [textareaValue, value, controlled]
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
                <Textarea
                    fontSize={size}
                    data-testid="input"
                    disabled={disabled}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onChange={e => onChangeHandler(e.target.value)}
                    value={getTextareaValue()}
                    placeholder={placeholder}
                />
            )
        },
        [disabled, onFocusHandler, onBlurHandler, onChangeHandler, getTextareaValue, placeholder, size]
    )


    /** define the return statement bellow */
    return (
        <TextareaWrapper>
            <GenericFormBoxComponent
                isDisabled={disabled}
                isInvalid={isInvalid}
                isFocused={isFocused}
                errorRenderer={(errorMessage && isInvalid) ? errorRenderer : undefined}
                middleAreaRenderer={middleAreaRenderer}
            />
        </TextareaWrapper>
    )

}

/** export the component */
export default TextAreaComponent;