import React from 'react'

import { Meta, Story } from '@storybook/react';
import GenericLoadableImageComponent, { GenericLoadableImageComponentProps } from '.';
import noImagePlaceholderSrc from "../../../assets/svgs/no-image-placeholder.svg";
import image from '../../../assets/images/profile-image-2.jpg';

export default {
  component: GenericLoadableImageComponent,
  title: 'General/GenericLoadableImage',
  args: {
      imageSrc: '',
      imageAlt: '',
      noImageSrc: noImagePlaceholderSrc,
      withSkeleton: true,
      displayNoImageSrcWhenLoading: false
  }
} as Meta<GenericLoadableImageComponentProps>;

const Template: Story<GenericLoadableImageComponentProps> = 
    (args) => (
        <div style={{width: '300px', height: '300px'}}>
            <GenericLoadableImageComponent {...args} />
        </div>
    );

export const LocalImageUrl = Template.bind({});
LocalImageUrl.args = {
    imageSrc: image
}

export const RemoteImageUrl = Template.bind({});
RemoteImageUrl.args = {
    imageSrc: 'https://picsum.photos/400'
}

export const NoSkeleton = Template.bind({});
NoSkeleton.args = {
    imageSrc: 'https://picsum.photos/400',
    withSkeleton: false
}

export const NoSkeletonWithImagePlaceholderOnLoad = Template.bind({});
NoSkeletonWithImagePlaceholderOnLoad.args = {
    imageSrc: 'https://picsum.photos/400',
    withSkeleton: false,
    displayNoImageSrcWhenLoading: true
}

export const NoUrl = Template.bind({});
NoUrl.args = {
    imageSrc: ''
}

export const InvalidUrl = Template.bind({});
InvalidUrl.args = {
    imageSrc: 'https://invalid'
}