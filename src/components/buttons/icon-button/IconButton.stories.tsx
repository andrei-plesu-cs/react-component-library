import React from 'react'

import { Meta, Story } from '@storybook/react';
import { sizeArgsType } from '../../../utils/theme-util/ThemeUtil';
import IconButtonComponent, { IconButtonComponentProps } from '.';
import icon from '../../../assets/svgs/planets.svg';

export default {
  component: IconButtonComponent,
  title: 'Buttons/IconButton',
  argTypes: {
    onClick: { action: 'onClick', table: { disable: true } },
    size: sizeArgsType
  },
  args: {
    color: '#000',
    iconSrc: '',
    size: 'medium',
    iconAlt: '',
    isFontAwesomeIcon: false,
    rounded: false,
    disabled: false
  }
} as Meta<IconButtonComponentProps>;

const Template: Story<IconButtonComponentProps> = (args) => (
    <IconButtonComponent {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
    iconSrc: icon,
    iconAlt: 'Simple icon'
}