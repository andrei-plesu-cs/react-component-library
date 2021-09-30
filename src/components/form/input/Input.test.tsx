import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Default, Disabled, Invalid } from './Input.stories';

describe('InputComponent', () => {

    describe('Default story', () => {
        it('Should contain placeholder', () => {
            let placeholder = 'This should work'

            const { queryByPlaceholderText } = render(
                <Default placeholder={placeholder} />
            )

            let placeholderOutput = queryByPlaceholderText(placeholder);
        
            expect(placeholderOutput).not.toBeNull();
        })

        it('Uncontrolled input should contain value after onChange event is fired', async () => {
            let inputValue = 'Test value';
            const handleChange = jest.fn();

            const { getByTestId } = render(
                <Default onChange={handleChange} />
            )

            let input = getByTestId('input') as HTMLInputElement;
            
            expect(input?.value).toBe('');

            fireEvent.change(input, {target: {value: inputValue}});

            expect(input?.value).toBe(inputValue);
            expect(handleChange).toHaveBeenCalledTimes(0);

        })

        it('Controlled input should call onChange prop callback after new value was entered', async () => {
            let inputValue = 'Test value';
            const handleChange = jest.fn();

            const { getByTestId } = render(
                <Default controlled onChange={handleChange} />
            )

            let input = getByTestId('input') as HTMLInputElement;
            
            expect(input?.value).toBe('');

            fireEvent.change(input, {target: {value: inputValue}});

            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(handleChange).toHaveBeenCalledWith(inputValue);

        })

        it('Controlled input should display passed in value and should not call onChange', async () => {
            let inputValue = 'Test value';
            let newInputValue = 'New test value';
            const handleChange = jest.fn();

            const { getByTestId, rerender } = render(
                <Default controlled onChange={handleChange} value={inputValue} />
            )

            let input = getByTestId('input') as HTMLInputElement;

            expect(handleChange).toHaveBeenCalledTimes(0);
            expect(input?.value).toBe(inputValue);

            fireEvent.change(input, {target: {value: newInputValue}});

            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(handleChange).toHaveBeenCalledWith(newInputValue);
            expect(input?.value).toBe(inputValue);

            rerender(
                <Default controlled onChange={handleChange} value={newInputValue} />
            )

            input = getByTestId('input') as HTMLInputElement;

            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(input?.value).toBe(newInputValue);

        })
    })

    describe('Invalid story', () => {
        it('Invalid message should be present with specified error message when input is in error state', () => {
            let errorMessage = 'Test error message'

            const { queryByText } = render(
                <Invalid errorMessage={errorMessage} isInvalid />
            )

            let errorMessageContainer = queryByText(errorMessage);
        
            expect(errorMessageContainer).not.toBeNull();
        })

        it('Invalid message should not be displayed when no error message text si provided', () => {

            const { queryByTestId } = render(
                <Invalid isInvalid />
            )

            let errorMessageContainer = queryByTestId('error-container');
        
            expect(errorMessageContainer).toBeNull();
        })

        it('Invalid message should not be displayed when invalid prop is not set to true', () => {

            const { queryByTestId } = render(
                <Invalid errorMessage="Test error message" />
            )

            let errorMessageContainer = queryByTestId('error-container');
        
            expect(errorMessageContainer).toBeNull();
        })
    })

    describe('Disabled story', () => {
        it('Disabled container should be present if disabled prop is set', () => {

            const { queryByTestId } = render(
                <Disabled disabled />
            )

            let disabledContainer = queryByTestId('disabled-container');
        
            expect(disabledContainer).not.toBeNull();
        })

        it('Disabled container should not be present if disabled prop is not set', () => {

            const { queryByTestId } = render(
                <Disabled />
            )

            let disabledContainer = queryByTestId('disabled-container');
        
            expect(disabledContainer).toBeNull();
        })
    })

});