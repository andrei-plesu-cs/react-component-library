import React, { useCallback, useState, useEffect, useRef } from "react";
import ErrorMessage from "../../../styled-components/ErrorMessage";
import Input from "../../../styled-components/Input";
import { IdItem, IdType } from "../../../utils/common-util/CommonUtils";
import { BasicFormElementControls, ControllableFormElement } from "../../../utils/form-utils/FormUtils";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import GenericListComponent, { GenericListComponentProps } from "../../general/generic-list";
import GenericFormBoxComponent from "../generic-form-box";
import GenericSelectComponent from "../generic-select";
import SelectWrapper from "./Select.wrapper";

export type SelectComponentProps<T extends IdItem> = {
    selectedOptionRenderer?: (item: T | undefined) => string,
    filterItemsBySearchValue?: (inputValue: string, item: T | undefined) => boolean,
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
    filterItemsBySearchValue,
    ...rest
}: SelectComponentProps<T>) => {


    /** DEFINE THE STATE BELLOW */

    const [isOpen, setIsOpen] = useState<boolean | undefined>(false);
    const [selectedOption, setSelectedOption] = useState<T | undefined>(undefined);
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);


    /** DEFINE THE EFFECTS BELLOW */

    const inputRef = useRef(null);

    useEffect(() => {
        if (selectedOption === undefined)
            return;

        onChange(selectedOption);
    }, [selectedOption, onChange]);


    /** DEFINE THE HANDLERS BELLOW */

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

            setInputValue(() => undefined);

            if (inputRef && inputRef.current && searchEnabled)
                (inputRef.current as any).blur();

            setIsOpen(() => false);
        },
        [
            items, 
            controlled, 
            setIsOpen, 
            setSelectedOption, 
            onChange, 
            disabled,
            inputRef, 
            searchEnabled
        ]
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
            /** check to see first if search is enabled and the input is focused (the dropdown
             * is open). If this is the case, then display as the value the current search value,
             * and as placeholder display the current selected value, if any
             */
            if (searchEnabled && isOpen)
                return inputValue ?? '';

            /** Otherwise display the current selected value if any */
            if (!selectedOptionRenderer) return 'selectedOptionRenderer not implemented';
            let valueToReturn = controlled ? value : selectedOption;
            return selectedOptionRenderer(valueToReturn);
        },
        [controlled, value, selectedOption, selectedOptionRenderer, inputValue, isOpen, searchEnabled]
    )

    const getPlaceholderValue = useCallback(
        () => {
            if (searchEnabled && isOpen) {
                if (!selectedOptionRenderer) return 'selectedOptionRenderer not implemented';
                let valueToReturn = controlled ? value : selectedOption;
                let renderedOption = selectedOptionRenderer(valueToReturn);
                if (renderedOption) return renderedOption;
                return placeholder;
            } else {
                return placeholder;
            }
        },
        [searchEnabled, placeholder, selectedOptionRenderer, value, controlled, selectedOption, isOpen]
    )

    const onInputChangeHandler = useCallback(
        (newValue: string | undefined) => {
            setInputValue(() => newValue);
        },
        [setInputValue]
    )

    const filterItems = useCallback(
        () => {
            if (!searchEnabled || !filterItemsBySearchValue || inputValue === undefined)
                return items;
            
            return items?.filter(item => filterItemsBySearchValue(inputValue, item));
        },
        [inputValue, items, filterItemsBySearchValue, searchEnabled]
    )

    const middleAreaRenderer = useCallback(
        () => {
            return (
                <Input
                    ref={inputRef}
                    fontSize={size}
                    disabled={!searchEnabled || disabled}
                    onChange={e => onInputChangeHandler(e.target.value)}
                    value={getSelectedValue()}
                    placeholder={getPlaceholderValue()}
                />
            )
        },
        [
            getSelectedValue, 
            size, 
            searchEnabled, 
            disabled, 
            onInputChangeHandler,
            getPlaceholderValue
        ]
    )

    const topContainerRenderer = useCallback(
        () => {
            return (
                <GenericFormBoxComponent
                    isDisabled={disabled}
                    isInvalid={isInvalid}
                    isFocused={isOpen}
                    errorRenderer={(errorMessage && isInvalid) ? errorRenderer : undefined}
                    middleAreaRenderer={middleAreaRenderer}
                />
            )
        },
        [
            middleAreaRenderer, 
            errorRenderer,
            disabled,
            isInvalid,
            errorMessage,
            isOpen
        ]
    )

    const itemsContainerRenderer = useCallback(
        () => {
            return (
                <GenericListComponent<T>
                    {...rest}
                    items={filterItems()}
                    onItemClick={onItemClickHandler}
                />
            )
        },
        [filterItems, onItemClickHandler, rest]
    )

    const onIsOpenChangeHandler = useCallback(
        (newValue: boolean) => {
            if (inputRef && inputRef.current && searchEnabled) {
                if (newValue) (inputRef.current as any).focus();
                else (inputRef.current as any).blur();
            }

            setIsOpen(() => newValue);
        },
        [setIsOpen, inputRef, searchEnabled]
    )


    /** define the return statement bellow */
    return (
        <SelectWrapper>

            <GenericSelectComponent
                disabled={disabled}
                topContainerRenderer={topContainerRenderer}
                itemsContainerRenderer={itemsContainerRenderer}
                value={isOpen}
                onIsOpenChange={onIsOpenChangeHandler}
                controlled
            />

        </SelectWrapper>
    )

}

export default SelectComponent;