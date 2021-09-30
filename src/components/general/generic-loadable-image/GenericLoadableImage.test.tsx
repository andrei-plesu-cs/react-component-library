import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import { RemoteImageUrl, LocalImageUrl, NoUrl, InvalidUrl } from './GenericLoadableImage.stories';
import imageSrc from '../../../assets/images/profile-image-2.jpg';

jest.setTimeout(10 * 1000);

describe('GenericLoadableImageComponent', () => {

    describe('LocalImageUrl story', () => {

        it('Should display the image provided as prop', () => {

            const { queryByTestId } = render(
                <LocalImageUrl {...LocalImageUrl.args} imageSrc={imageSrc} />
            )

            let image = queryByTestId('image');

            expect(image).not.toBe(null);
            expect(image?.tagName).toBe('IMG');
            expect(image).toHaveAttribute('src', imageSrc);

        });

        it('Should not display skeleton', () => {

            const { queryByTestId } = render(
                <LocalImageUrl {...LocalImageUrl.args} />
            )

            let skeleton = queryByTestId('skeleton');

            expect(skeleton).toBeNull();

        })

        it('Should have alt attribute that was provided as prop', () => {

            let imageAlt = 'Test image alt';

            const { queryByTestId } = render(
                <LocalImageUrl {...LocalImageUrl.args} imageAlt={imageAlt} />
            )

            let image = queryByTestId('image');

            expect(image).toHaveAttribute('alt', imageAlt);

        });

    })

    describe('NoUrl story', () => {

        it('Should display image placeholder if no url is provided', async () => {

            let noImageSrc = imageSrc;

            const { findByTestId } = render(
                <NoUrl {...NoUrl.args} noImageSrc={noImageSrc} />
            )

            let image = await findByTestId('image');

            expect(image).not.toBeNull();
            expect(image).toHaveAttribute('src', noImageSrc);

        });

    })

});