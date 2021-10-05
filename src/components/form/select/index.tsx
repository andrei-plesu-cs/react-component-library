import React, { useCallback, useState, useEffect, useRef } from "react";
import AnimationContainer from "../../../styled-components/AnimationContainer";
import ErrorMessage from "../../../styled-components/ErrorMessage";
import Input from "../../../styled-components/Input";
import { AnimationProps } from "../../../utils/animations-util/AnimationsUtil";
import { IdItem, IdType } from "../../../utils/common-util/CommonUtils";
import { BasicFormElementControls, ControllableFormElement } from "../../../utils/form-utils/FormUtils";
import { SizeProps } from "../../../utils/theme-util/ThemeUtil";
import GenericListComponent, { GenericListComponentProps } from "../../general/generic-list";
import GenericFormBoxComponent from "../generic-form-box";
import GenericSelectComponent from "../generic-select";
import SelectWrapper from "./Select.wrapper";

/** component props definition */
export type SelectComponentProps<T extends IdItem> = {
    /** Receives the current inspected item as param and returns a string that will be
     * displayed in the underlaying input component. Should always be implemented by the parent
     */
    selectedOptionRenderer: (item: T | undefined) => string;

    /** Used to filter items when text is present in the input component. Receives the text in the
     * input component, as well as the item and returns wheter to include the item in the search
     * or not. If 'searchEnabled' is set to true, then this method should be implemented
     */
    filterItemsBySearchValue?: (inputValue: string, item: T | undefined) => boolean;

    /** Placeholder for the underlaying input component */
    placeholder?: string;

    /** Indicates wheter the underlaying input should be enabled or not. If set to true, that
     * typing in the input will result in items filtering using the 'filterItemsBySearchValue'
     * function. Defaults to false
     */
    searchEnabled?: boolean;

    /** Props that control the animation of the items list renderer */
    animationProps: AnimationProps
} & GenericListComponentProps<T> & ControllableFormElement<T> & BasicFormElementControls<T> & SizeProps;

/**
 * Simple select component built upon the GenericSelect component with a searchable input as
 * the top container, and the generic list as the items renderer container.
 * 
 * Could be controlled from the parent, or could control itself by the use of an internal state,
 * in which case it only signals the parent of any change.
 * 
 * @component
 */
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
    animationProps = { animation: 'opacity-scale-bounce', transformOrigin: 'top' },
    ...rest
}: SelectComponentProps<T>) => {


    /** DEFINE THE STATE BELLOW */

    /** Indicates wheter the items could be displayed or not. Also, is used to indicate when
     * the component is focused/blured
     */
    const [isOpen, setIsOpen] = useState<boolean | undefined>(false);

    /** Holds the current selected option. Is used only if the component is uncontrolled.
     * Otherwise, the select expects the updated selected option to be passed through props.
     */
    const [selectedOption, setSelectedOption] = useState<T | undefined>(undefined);
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);


    /** DEFINE THE EFFECTS BELLOW */

    /** Reference for the underlaying input component, used for focus/blur states when the
     * input is enabled ('searchEnabled' param is set to true)
     */
    const inputRef = useRef(null);

    /** Used to signal the parent of any change in the selected option state, through the
     * selectedOption prop
     */
    useEffect(() => {
        if (selectedOption === undefined)
            return;

        onChange(selectedOption);
    }, [selectedOption, onChange]);


    /** DEFINE THE HANDLERS BELLOW */

    /** Returns the selected option based on wheter the component is controlled or not */
    const getSelectedOption = useCallback(
        () => {
            return controlled ? value : selectedOption;
        },
        [controlled, value, selectedOption]
    );

    /** Gets called when a new option has been selected by clicking on that item */
    const onItemClickHandler = useCallback(
        (id: IdType) => {
            if (disabled) return;

            /** try to find the selected item in the list */
            let item = items?.find(item => item.id === id);
            if (!item) return;

            /** if component is controlled, signal the parent of the change and expect the
             * parent to pass in the updated value through the 'value' prop. If uncontrolled,
             * update the internal state
             */
            if (controlled) {
                onChange(item);
            } else {
               setSelectedOption(item);
            }

            /** reset the search value, if any */
            setInputValue(() => undefined);

            /** blur the input when a new option has been selected */
            if (inputRef && inputRef.current && searchEnabled)
                (inputRef.current as any).blur();

            /** hide the options */
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

    /** Renders the error message provided from the parent, if any */
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

    /** Decides what to display in the underlaying input value */
    const getSelectedValue = useCallback(
        () => {
            /** check to see first if search is enabled and the input is focused (the dropdown
             * is open). If this is the case, then display as the value the current search value,
             * and as placeholder display the current selected option, if any
             */
            if (searchEnabled && isOpen)
                return inputValue ?? '';

            /** Otherwise display the current selected value if any */
            if (!selectedOptionRenderer) return 'selectedOptionRenderer not implemented';
            let valueToReturn = getSelectedOption();
            return selectedOptionRenderer(valueToReturn);
        },
        [ 
            selectedOptionRenderer, 
            inputValue, 
            isOpen, 
            searchEnabled, 
            getSelectedOption
        ]
    )

    /** Decides what to display as the underlaying input placeholder */
    const getPlaceholderValue = useCallback(
        () => {
            /** If the search is enabled and the items are shown (the focus in this case will
             * by on the input), display as placeholder the selected option if any */
            if (searchEnabled && isOpen) {
                if (!selectedOptionRenderer) return 'selectedOptionRenderer not implemented';

                let valueToReturn = getSelectedOption();

                let renderedOption = selectedOptionRenderer(valueToReturn);
                if (renderedOption) return renderedOption;

                return placeholder ?? '';
            }

            /** Otherwise simply return the placeholder */
            return placeholder ?? '';
        },
        [
            searchEnabled, 
            placeholder, 
            selectedOptionRenderer, 
            isOpen,
            getSelectedOption
        ]
    )

    /** Gets called when the input value changes. Simply updates the state with the new value */
    const onInputChangeHandler = useCallback(
        (newValue: string | undefined) => {
            setInputValue(() => newValue);
        },
        [setInputValue]
    )

    /** If the search is enabled (the underlaying input is enabled), filter the items with
     * the help of the 'filterItemsBySearchValue' which should be implemented and passed through
     * props from the parent. Otherwise, the elements are returned untouched
     */
    const filterItems = useCallback(
        () => {
            if (!searchEnabled || !filterItemsBySearchValue || inputValue === undefined)
                return items;
            
            return items?.filter(item => filterItemsBySearchValue(inputValue, item));
        },
        [inputValue, items, filterItemsBySearchValue, searchEnabled]
    )

    /** Used by the GenericFormBox component to render the underlaying input */
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

    /** Used by the GenericSelect component to render the top container. In this component,
     * the top container will be the GenericFormBox component containing a simple searchable
     * input
     */
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

    /** Used by the GenericSelect component to render the items. Here, the generic list is
     * chosen
     */
    const itemsContainerRenderer = useCallback(
        () => {
            return (
                <AnimationContainer {...animationProps}>
                    <GenericListComponent<T>
                        {...rest}
                        items={filterItems()}
                        onItemClick={onItemClickHandler}
                        selectedItemId={getSelectedOption()?.id}
                        areItemsSelectable={true}
                    />
                </AnimationContainer>        
            )
        },
        [filterItems, onItemClickHandler, rest, getSelectedOption]
    )

    /** Gets called when the GenericSelect component is focused/blured by click or tab press
     * and updates the 'isOpen' variable which would in turn display/hide the items. Also,
     * the input is focused/blured here it is enabled, to mimic right visual behaviour
     */
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

/** export the component */
export default SelectComponent;