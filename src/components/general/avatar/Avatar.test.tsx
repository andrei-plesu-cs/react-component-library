import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { Default } from './Avatar.stories';

describe('AvatarComponent', () => {

    describe('Default story', () => {

        it('Should render', () => {
            
            const { container } = render(
                <Default {...Default.args} imageAlt="Test image alt" />
            )

            expect(container).toBeDefined();

        })

    })

});