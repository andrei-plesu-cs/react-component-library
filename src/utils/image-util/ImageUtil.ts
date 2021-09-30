import { isEmpty } from "lodash";
import { useEffect, useState } from "react";

export type ImageLoaderResponse = {
    status: 'standby' | 'loading' | 'success' | 'error',
    base64Url?: string
}

export const useImageLoaderHook = (
    imageSrc: string, 
    noImageSrc: string
): ImageLoaderResponse => {

    const [imageLoaderResponse, setImageLoaderResponse] = useState<ImageLoaderResponse>({
        status: 'standby',
        base64Url: ''
    });

    useEffect(() => {
        if (isEmpty(imageSrc)) {
            setImageLoaderResponse({
                status: 'success',
                base64Url: noImageSrc
            });
            return;
        }
    
        if (ImageUtil.checkIfUrlIsOfNetworkType(imageSrc)) {

            setImageLoaderResponse({
                status: 'loading',
                base64Url: noImageSrc
            });

            ImageUtil.urlContentToDataUri(imageSrc)
                .then(dataUri => {
                    setImageLoaderResponse({
                        status: 'success',
                        base64Url: dataUri ?? noImageSrc
                    });
                })
                .catch(() => {
                    setImageLoaderResponse({
                        status: 'error',
                        base64Url: noImageSrc
                    });
                })

        } else {
            setImageLoaderResponse({
                status: 'success',
                base64Url: imageSrc
            });
        }        

    }, [imageSrc, noImageSrc]);

    return imageLoaderResponse;
}

export class ImageUtil {

    static async urlContentToDataUri(url: string): Promise<string | null | undefined> {
        
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            
            const dataUri = await new Promise<string | null | undefined>( callback => {
                let reader = new FileReader() ;
                reader.onload = function(){ 
                    callback(this.result as string | null | undefined);
                }
                reader.readAsDataURL(blob) ;
            });
    
            return dataUri;
        } catch(e) {
            return null;
        }

    }

    static checkIfUrlIsOfNetworkType(url: string): boolean {
        return url.indexOf('http') >= 0;
    }

}