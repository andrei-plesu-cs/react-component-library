import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { TextOnly, WithAvatar, WithDescription } from './ListItem.stories';

describe('GenericListItemComponent', () => {

    describe('TextOnly story', () => {

        it('Should contain title as provided from props', () => {

            let title = 'Test title';

            const { queryByText } = render(
                <TextOnly {...TextOnly.args} title={title} id="id"  />
            )

            let element = queryByText(title);

            expect(element).toBeInTheDocument();

        });

        it('Should call onClick callback on item click', () => {

            let onClickMock = jest.fn();

            render(
                <TextOnly {...TextOnly.args} onClick={onClickMock} id="id"  />
            )

            let element = document.getElementsByClassName('generic-list-item-wrapper')[0];

            fireEvent.click(element);

            expect(onClickMock).toHaveBeenCalledTimes(1);

        });

        it('Should not call onClick callback when item is not clicked', () => {

            let onClickMock = jest.fn();

            render(
                <TextOnly {...TextOnly.args} onClick={onClickMock} id="id"  />
            )

            expect(onClickMock).toHaveBeenCalledTimes(0);

        });

    })

    describe('WithDescription story', () => {

        it('Should contain description as provided from props', () => {

            let description = 'Test description';

            const { queryByText } = render(
                <WithDescription {...WithDescription.args} description={description} id="id"  />
            )

            let element = queryByText(description);

            expect(element).toBeInTheDocument();

        });

    })

    describe('WithDescription story', () => {

        it('Should contain avatar and imgSrc should be set to the one provided', async () => {

            const { queryByTestId } = render(
                <WithAvatar {...WithAvatar.args} id="id"  />
            )

            let element = queryByTestId('avatar');

            expect(element).toBeInTheDocument();

        });

    })

});