import React from 'react'

import { Meta, Story } from '@storybook/react';

import { sizeArgsType } from '../../../utils/theme-util/ThemeUtil';
import image from '../../../assets/images/profile-image-1.jpg';
import AvatarComponent, { AvatarComponentProps } from '.';

export default {
  component: AvatarComponent,
  title: 'General/Avatar',
  argTypes: {
    size: sizeArgsType
  },
  args: {
    size: 'medium',
    imageAlt: '',
    imageSrc: '',
    withSkeleton: true
  }
} as Meta<AvatarComponentProps>;

const Template: Story<AvatarComponentProps> = (args) => <AvatarComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    imageSrc: image
}