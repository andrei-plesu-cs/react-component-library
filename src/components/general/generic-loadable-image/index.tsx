import { isEmpty } from "lodash";
import React, { useCallback } from "react";
import Image from "../../../styled-components/Image";
import Skeleton from "../../../styled-components/Skeleton";
import { ImageLoaderResponse, useImageLoaderHook } from "../../../utils/image-util/ImageUtil";
import GenericLoadableImageWrapper from "./GenericLoadableImage.wrapper";
import noImagePlaceholderSrc from "../../../assets/svgs/no-image-placeholder.svg";

export type GenericLoadableImageComponentProps = {
    imageSrc?: string;
    imageAlt?: string;
    withSkeleton?: boolean;
    noImageSrc?: string;
    displayNoImageSrcWhenLoading?: boolean;
}

const GenericLoadableImageComponent = ({
    imageSrc = '',
    imageAlt = 'Generic loadable image alt',
    withSkeleton = true,
    displayNoImageSrcWhenLoading = false,
    noImageSrc = noImagePlaceholderSrc
}: GenericLoadableImageComponentProps) => {


    /** DEFINE THE EFFECTS BELLOW */

    const loaderResponse: ImageLoaderResponse = useImageLoaderHook(imageSrc, noImageSrc);


    /** DEFINE HANDLERS BELLOW */

    const canDisplaySkeleton = useCallback(
        () => {
            return withSkeleton && loaderResponse.status === 'loading';
        },
        [withSkeleton, loaderResponse]
    );

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

export default GenericLoadableImageComponent;