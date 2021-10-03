import React from 'react'

import { Meta, Story } from '@storybook/react';
import FilledButtonComponent, { FilledButtonComponentProps } from '.';
import { elementTypeArgsType, sizeArgsType } from '../../../utils/theme-util/ThemeUtil';

export default {
  component: FilledButtonComponent,
  title: 'Buttons/FilledButton',
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
} as Meta<FilledButtonComponentProps & {text: string}>;

const Template: Story<FilledButtonComponentProps & {text: string}> = (args) => (
    <FilledButtonComponent {...args} >
        {args.text}
    </FilledButtonComponent>
);

export const Playground = Template.bind({});
Playground.args = {
    
}