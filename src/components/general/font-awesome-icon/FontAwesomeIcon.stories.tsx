import React from 'react'

import { Meta, Story } from '@storybook/react';

import { sizeArgsType } from '../../../utils/theme-util/ThemeUtil';
import FontAwesomeIconComponent, { FontAwesomeIconComponentProps } from '.';

export default {
  component: FontAwesomeIconComponent,
  title: 'General/FontAwesomeIcon',
  argTypes: {
    size: sizeArgsType
  },
  args: {
    size: 'medium',
    color: '',
    iconSrc: ''
  }
} as Meta<FontAwesomeIconComponentProps>;

const Template: Story<FontAwesomeIconComponentProps> = 
    (args) => <FontAwesomeIconComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    iconSrc: '',
    color: '',
    size: 'medium'
}