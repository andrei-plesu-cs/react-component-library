import React from 'react'
import { Meta, Story } from '@storybook/react';
import IconComponent, { IconComponentProps } from '.';
import icon from '../../../assets/svgs/planets.svg';
import { sizeArgsType } from '../../../utils/theme-util/ThemeUtil';

export default {
  component: IconComponent,
  title: 'General/Icon',
  args: {
    size: 'medium',
    iconAlt: 'Icon alt',
    iconSrc: ''
  },
  argTypes: {
    size: sizeArgsType
  }
} as Meta<IconComponentProps>;

const Template: Story<IconComponentProps> = (args) => <IconComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    iconSrc: icon
}