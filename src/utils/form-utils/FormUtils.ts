export type ControllableFormElement<T> = {
    value?: T;
    controlled?: boolean;
}

export type BasicFormElementControls<T> = {
    onChange?: (newValue: T) => void;
    disabled?: boolean;
    isInvalid?: boolean;
    errorMessage?: string;
    onFocus?: () => void,
    onBlur?: () => void
}