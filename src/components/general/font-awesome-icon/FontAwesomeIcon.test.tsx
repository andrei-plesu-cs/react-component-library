import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Default } from './FontAwesomeIcon.stories';

describe('InputComponent', () => {

    describe('Default story', () => {

        it('Should contain i tag', () => {

            const { queryByTestId } = render(
                <Default />
            );

            const iElement = queryByTestId('font-awesome-icon');

            expect(iElement).not.toBeNull();
            expect(iElement?.tagName).toBe('I');

        });

        it('Should define class to i tag that equals iconSrc', () => {

            let iconSrc = 'test-icon-src';

            const { queryByTestId } = render(
                <Default iconSrc={iconSrc} />
            );

            const iElement = queryByTestId('font-awesome-icon');

            expect(iElement).not.toBeNull();
            expect(iElement?.tagName).toBe('I');
            expect(iElement).toHaveClass(iconSrc);

        });

    })

});