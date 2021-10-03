import React, { useCallback } from "react";
import Image from "../../../styled-components/Image";
import Skeleton from "../../../styled-components/Skeleton";
import { ImageLoaderResponse, useImageLoaderHook } from "../../../utils/image-util/ImageUtil";
import GenericLoadableImageWrapper from "./GenericLoadableImage.wrapper";
import noImagePlaceholderSrc from "../../../assets/svgs/no-image-placeholder.svg";
import { isEmpty } from "lodash";

/** component props definition */
export type GenericLoadableImageComponentProps = {
    /** The image src, could be base64 or url */
    imageSrc?: string;

    /** Will get passed on the img tag as the alt attribute */
    imageAlt?: string;

    /** Specifies if the skeleton loader should be present in the loading phase or not.
     * True by default
     */
    withSkeleton?: boolean;

    /** What to display if the image could not be loaded. Must be base64, not url */
    noImageSrc?: string;

    /** Specify if the 'noImageSrc' image should be displayed while loading or not. This
     * should be used with 'withSkeleton' set to false
     */
    displayNoImageSrcWhenLoading?: boolean;
}

/**
 * Generic image loader. Depending on the type of the image source provided as param, might
 * make a request to try to load the image into memory, display a skeleton loader while doing so.
 * Also, could display default image, if there is an error loading the image (url is invalid or
 * the image on that url could not be loaded).
 * 
 * @component
 */
const GenericLoadableImageComponent = ({
    imageSrc = '',
    imageAlt = 'Generic loadable image alt',
    withSkeleton = true,
    displayNoImageSrcWhenLoading = false,
    noImageSrc = noImagePlaceholderSrc
}: GenericLoadableImageComponentProps) => {


    /** DEFINE THE EFFECTS BELLOW */

    /** Holds the value for the response. This is returned by the hook that manages the
     * fetch of the image if the source is network based and handles other cases. The response
     * holds info about the request state, and also the base64 encoding of the loaded image
     */
    const loaderResponse: ImageLoaderResponse = useImageLoaderHook(imageSrc, noImageSrc);


    /** DEFINE HANDLERS BELLOW */

    /** Decides wheter to display the skeleton loader or not */
    const canDisplaySkeleton = useCallback(
        () => {
            return withSkeleton && loaderResponse.status === 'loading';
        },
        [withSkeleton, loaderResponse]
    );

    /** Decides wheter to display the image or not */
    const canDisplayImage = useCallback(
        () => {
            if (loaderResponse.status === 'standby')
                return false;
            
            if (loaderResponse.status === 'loading' && !isEmpty(loaderResponse.base64Url)) {
                if (displayNoImageSrcWhenLoading)
                    return true;
                return false;
            }

            return (loaderResponse.status === 'success' || loaderResponse.status === 'error')
                && !isEmpty(loaderResponse.base64Url);
        },
        [loaderResponse, displayNoImageSrcWhenLoading]
    )


    /** define the return statement bellow */
    return (
        <GenericLoadableImageWrapper className="generic-loadable-image-wrapper">
            { canDisplayImage() ? 
                <Image
                    data-testid="image"
                    alt={imageAlt}
                    src={loaderResponse.base64Url}
                /> : null
            }
            { canDisplaySkeleton() ? 
                <Skeleton
                    className="skeleton"
                    data-testid="skeleton"
                /> : null 
            }
        </GenericLoadableImageWrapper>
    );

}

/** export the component */
export default GenericLoadableImageComponent;