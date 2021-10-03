import React from 'react'

import { Meta, Story } from '@storybook/react';
import HollowButtonComponent, { HollowButtonComponentProps } from '.';
import { elementTypeArgsType, sizeArgsType } from '../../../utils/theme-util/ThemeUtil';

export default {
  component: HollowButtonComponent,
  title: 'Buttons/HollowButton',
  argTypes: {
    elementType: elementTypeArgsType,
    onClick: { action: 'onClick', table: { disable: true } },
    size: sizeArgsType
  },
  args: {
    elementType: 'primary',
    disabled: false,
    text: 'Click me now',
  }
} as Meta<HollowButtonComponentProps & {text: string}>;

const Template: Story<HollowButtonComponentProps & {text: string}> = (args) => (
    <HollowButtonComponent {...args} >
        {args.text}
    </HollowButtonComponent>
);

export const Playground = Template.bind({});
Playground.args = {
    
}