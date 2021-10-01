import React, {useState, useCallback, useRef} from 'react';
import { useOutsideClick } from '../../../utils/common-util/CommonUtils';
import GenericSelectWrapper from './GenericSelect.wrapper';

/** component props definition */
export type GenericSelectComponentProps = {
    /** Indicates wheter the component should be disabled or not */
    disabled?: boolean;

    /** Renders the top container */
    topContainerRenderer: () => React.ReactNode;

    /** Renders the items container  */
    itemsContainerRenderer: () => React.ReactNode;

    /** Callback to indicate when the state of the items container has been changed. Useful only
     * if the controlled prop is being activated
     */
    onIsOpenChange?: (newValue: boolean) => void;

    /** Indicated wheter the component should track the updates itself or it should receive the
     * updates through props from the parent
     */
    controlled?: boolean;

    /** If controlled prop is set to true, then this prop should relfect the latest state of
     * the items container as the component will use this and not the internal state
     */
    value?: boolean;
}

/**
 * Generic select component, contains the logic needed to operate a typical select component. That is,
 * to open/close the items container on click or on tab enter, with help of focus/blur events. If the
 * disabled prop is set then, no interaction with the component will work.
 * 
 * The component might be controlled. In that case, the variable which decides when to open/close the
 * items container will be passed as prop
 * 
 * @component
 */
const GenericSelectComponent = ({
    disabled = false,
    topContainerRenderer,
    itemsContainerRenderer,
    onIsOpenChange = (newValue: boolean) => {},
    controlled = false,
    value = undefined
}: GenericSelectComponentProps) => {


    /** DEFINE THE STATE BELLOW */

    /** Indicates wheter the items container is open or not. It is used only if the component is
     * not controlled by the parent component
     */
    const [isOpen, setIsOpen] = useState<boolean | undefined>(false);


    /** DEFINE THE EFFECTS BELLOW */

    /** Used to detect clicks outside the select */
    const selectBodyRef = useRef(null);

    useOutsideClick(
        selectBodyRef, 
        ({setIsOpen, disabled, controlled, onIsOpenChange}) => {
            if (disabled) return;

            if (controlled)
                onIsOpenChange(false);
            else
                setIsOpen(() => false);
        }, 
        {setIsOpen, disabled, controlled, onIsOpenChange}
    );


    /** DEFINE THE HANDLERS BELLOW */

    /** Returns the current state of the items container depending on wheter the
     * component is controlled or not. If not controlled, the state is represented by
     * a inner state of the component, otherwise, a value passed through props is used
     * instead
     */
    const getIsOpen = useCallback(
        () => {
            let selectedValue = controlled ? value : isOpen;
            return selectedValue ?? false;
        },
        [controlled, value, isOpen]
    )

    /** Gets called when the top container is clicked
     * @param {object} event Click React synthetic event
     */
    const onSelectHeaderClick = useCallback(
        (event: any) => {
            if (disabled) return;

            /** We stop the propagation of the event through event bubbling because otherwise
             * it would reach focus event attached to this component, and so both click and focus
             * events would get triggered at the same time, which would create unintended behaviour
             */
            event.preventDefault();
            event.stopPropagation();
            
            /** Depending no the current state of the items container (open/closed), we delegate
             * the work of updating the state to the blur/focus events. This way, we create a single
             * source of truth in the component (only these events could modify the state, this click
             * event simply delegates depending on the current state).
             * 
             * We trick the component into thinking that is focused/blured by using the selectBodyRef ref
             */
            if (selectBodyRef && selectBodyRef.current) {
                if (getIsOpen()) {
                    (selectBodyRef.current as any).blur();
                }
                else {
                    (selectBodyRef.current as any).focus();
                }
            }
            
        },
        [disabled, selectBodyRef, getIsOpen]
    )

    /** Gets called when the component becomes active (focused), and updates the items container
     * state to be open. We use this focus event to also be able to open the items container on tab
     * press, not only on click event
     */
    const onSelectWrapperFocus = useCallback(
        () => {
            if (disabled) return;

            if (controlled)
                onIsOpenChange(true);
            else
                setIsOpen(() => true);
        },
        [disabled, setIsOpen, onIsOpenChange, controlled]
    )

    /** Gets called when the component becomes inactive (blured), and updates the items container
     * state to be closed. We use this blur event to also be able to close the items container on tab
     * press, not only on click event
     */
    const onSelectWrapperBlur = useCallback(
        () => {
            if (disabled) return;

            if (controlled)
                onIsOpenChange(false);
            else
                setIsOpen(() => false);
        },
        [setIsOpen, disabled, onIsOpenChange, controlled]
    )
    

    /**
     * The tab index is needed because otherwise this div element could not be brought into
     * focus (or blured) by tab press 
     */
    return (
        <GenericSelectWrapper
            className="generic-select-wrapper"
            onFocus={onSelectWrapperFocus} 
            onBlur={onSelectWrapperBlur}
            tabIndex={disabled ? -1 : 0}
            ref={selectBodyRef}
        >
            { disabled ? <div className="disabled-container"></div> : null } 

            <div 
                className="select-header" 
                onMouseDown={onSelectHeaderClick}
            >
                <div>
                    {
                        topContainerRenderer ?
                        topContainerRenderer() : null
                    }
                </div>
            </div>

            { (getIsOpen() && !disabled) ?
                <div className="select-body">
                    {
                        itemsContainerRenderer ?
                        itemsContainerRenderer() : null
                    }
                </div> : null
            }

        </GenericSelectWrapper>
    )

}

/** export the component */
export default GenericSelectComponent;