import React, { useCallback, useRef, useState, useEffect } from "react";
import ErrorMessage from "../../../styled-components/ErrorMessage";
import Input from "../../../styled-components/Input";
import { IdItem, IdType, useOutsideClick } from "../../../utils/common-util/CommonUtils";
import { BasicFormElementControls, ControllableFormElement } from "../../../utils/form-utils/FormUtils";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import GenericListComponent, { GenericListComponentProps } from "../../general/generic-list";
import GenericFormBoxComponent from "../generic-form-box";
import SelectWrapper from "./Select.wrapper";

export type SelectComponentProps<T extends IdItem> = {
    selectedOptionRenderer?: (item: T | undefined) => string,
    placeholder?: string;
    searchEnabled?: boolean;
} & GenericListComponentProps<T> & ControllableFormElement<T> & BasicFormElementControls<T> & SizeProps;

const SelectComponent = <T extends IdItem>({
    items,
    controlled = false,
    onChange = (newValue: T) => {},
    value,
    disabled,
    isInvalid,
    errorMessage,
    selectedOptionRenderer,
    size,
    placeholder,
    onFocus = () => {},
    onBlur = () => {},
    searchEnabled = false,
    ...rest
}: SelectComponentProps<T>) => {


    /** DEFINE THE STATE BELLOW */

    const [isOpen, setIsOpen] = useState<boolean | undefined>(false);
    const [selectedOption, setSelectedOption] = useState<T | undefined>(undefined);
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);


    /** DEFINE THE EFFECTS BELLOW */

    const selectBodyRef = useRef(null);
    
    useOutsideClick(
        selectBodyRef, 
        ([setIsOpen, disabled]) => {
            if (disabled) return;
            setIsOpen(() => false);
        }, 
        [setIsOpen, disabled]
    );

    useEffect(() => {
        if (selectedOption === undefined)
            return;
        
        onChange(selectedOption);
    }, [selectedOption, onChange]);

    useEffect(() => {
        if (isOpen === undefined) return;

        if (isOpen)
            onFocus();
        else
            onBlur();
    }, [onFocus, onBlur, isOpen]);


    /** DEFINE THE HANDLERS BELLOW */

    const onSelectHeaderClick = useCallback(
        (event: any) => {
            if (disabled) return;
            event.stopPropagation();
            event.preventDefault();
            setIsOpen(curr => !curr);
        },
        [setIsOpen, disabled]
    )

    const onItemClickHandler = useCallback(
        (id: IdType) => {
            if (disabled) return;

            let item = items?.find(item => item.id === id);
            if (!item) return;

            if (controlled) {
                onChange(item);
            } else {
               setSelectedOption(item);
            }

            setIsOpen(() => false);
        },
        [items, controlled, setIsOpen, setSelectedOption, onChange, disabled]
    )

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

    const getSelectedValue = useCallback(
        () => {
            if (!selectedOptionRenderer) return 'selectedOptionRenderer not implemented';
            let valueToReturn = controlled ? value : selectedOption;
            return selectedOptionRenderer(valueToReturn);
        },
        [controlled, value, selectedOption, selectedOptionRenderer]
    )

    const onFocusHandler = useCallback(
        () => {
            if (disabled) return;
            setIsOpen(() => true);
        },
        [setIsOpen, disabled]
    )

    const onKeyDownHandler = useCallback(
        (event: any) => {
            if (disabled) return;
            if ((event.which || event.keyCode) === 9) {
                setIsOpen(() => false);
            }
        },
        [setIsOpen, disabled]
    )

    const middleAreaRenderer = useCallback(
        () => {
            return (
                <Input
                    fontSize={size}
                    disabled={!searchEnabled || disabled}
                    // onChange={e => onChangeHandler(e.target.value)}
                    value={getSelectedValue()}
                    onFocus={onFocusHandler}
                    onKeyDown={onKeyDownHandler}
                    placeholder={placeholder}
                />
            )
        },
        [getSelectedValue, size, placeholder, onFocusHandler, onKeyDownHandler, searchEnabled, disabled]
    )

    const onSelectWrapperFocus = useCallback(
        () => {
            if (disabled) return;
            setIsOpen(() => true);
        },
        [disabled]
    )

    const onSelectWrapperBlur = useCallback(
        () => {
            if (disabled) return;
            setIsOpen(() => false);
        },
        [disabled]
    )


    /** define the return statement bellow */
    return (
        <SelectWrapper
            className="select-wrapper"
            ref={selectBodyRef}
            tabIndex={(searchEnabled || disabled) ? -1 : 1}
            onFocus={onSelectWrapperFocus}
            onBlur={onSelectWrapperBlur}
        >
            
            <div className="select-header" onMouseDown={onSelectHeaderClick}>
                <GenericFormBoxComponent
                    isDisabled={disabled}
                    isInvalid={isInvalid}
                    isFocused={isOpen}
                    errorRenderer={(errorMessage && isInvalid) ? errorRenderer : undefined}
                    middleAreaRenderer={middleAreaRenderer}
                />
            </div>

            { (isOpen && !disabled) ?
                <div className="select-body">
                    <GenericListComponent
                        {...rest}
                        items={items}
                        onItemClick={onItemClickHandler}
                    />
                </div> : null
            }

        </SelectWrapper>
    )

}

export default SelectComponent;