import React from 'react'

import { Meta, Story } from '@storybook/react';
import { sizeArgsType } from '../../../utils/theme-util/ThemeUtil';
import TextAreaComponent, { TextAreaComponentProps } from '.';

export default {
  component: TextAreaComponent,
  title: 'Form/Textarea',
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
    value: '',
    size: 'medium'
  }
} as Meta<TextAreaComponentProps>;

const Template: Story<TextAreaComponentProps> = (args) => <TextAreaComponent {...args} />;

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