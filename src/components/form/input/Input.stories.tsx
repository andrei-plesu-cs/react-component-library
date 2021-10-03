import React from 'react'

import { Meta, Story } from '@storybook/react';

import InputComponent, { InputComponentProps } from './index';
import { sizeArgsType } from '../../../utils/theme-util/ThemeUtil';

export default {
  component: InputComponent,
  title: 'Form/Input',
  argTypes: {
    size: sizeArgsType,
    onChange: { table: { disable: true } }
  },
  args: {
    controlled: false,
    disabled: false,
    errorMessage: '',
    isInvalid: false,
    onChange: () => {},
    placeholder: '',
    type: 'text',
    value: '',
    size: 'medium'
  }
} as Meta<InputComponentProps>;

const Template: Story<InputComponentProps> = (args) => <InputComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Example placeholder'
}

export const Invalid = Template.bind({});
Invalid.args = {
    isInvalid: true,
    errorMessage: 'This is a test error message',
    placeholder: 'Invalid state'
}

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    placeholder: 'Disabled state'
}