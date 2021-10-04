import React from 'react'

import { Meta, Story } from '@storybook/react';
import CheckboxComponent, { CheckboxComponentProps } from '.';
import { sizeArgsType } from '../../../utils/theme-util/ThemeUtil';

export default {
  component: CheckboxComponent,
  title: 'Form/Checkbox',
  argTypes: {
    onChange: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    size: sizeArgsType
  },
  args: {
    controlled: false,
    disabled: false,
    errorMessage: '',
    isInvalid: false,
    text: 'Click to toggle me',
    value: false,
    size: 'medium'
  }
} as Meta<CheckboxComponentProps>;

const Template: Story<CheckboxComponentProps> = (args) => <CheckboxComponent {...args} />;

export const Playground = Template.bind({});
Playground.args = {
    
}