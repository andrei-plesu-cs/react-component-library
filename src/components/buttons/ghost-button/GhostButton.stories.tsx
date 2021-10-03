import React from 'react'

import { Meta, Story } from '@storybook/react';
import GhostButtonComponent, { GhostButtonComponentProps } from '.';
import { elementTypeArgsType, sizeArgsType } from '../../../utils/theme-util/ThemeUtil';

export default {
  component: GhostButtonComponent,
  title: 'Buttons/GhostButton',
  argTypes: {
    elementType: elementTypeArgsType,
    onClick: { action: 'onClick', table: { disable: true } },
    size: sizeArgsType
  },
  args: {
    elementType: 'primary',
    disabled: false,
    text: 'Click me now'
  }
} as Meta<GhostButtonComponentProps & {text: string}>;

const Template: Story<GhostButtonComponentProps & {text: string}> = (args) => (
    <GhostButtonComponent {...args} >
        {args.text}
    </GhostButtonComponent>
);

export const Playground = Template.bind({});
Playground.args = {
    
}