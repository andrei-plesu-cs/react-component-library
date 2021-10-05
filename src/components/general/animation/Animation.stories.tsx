import React from 'react'

import { Meta, Story } from '@storybook/react';
import AnimationComponent, { AnimationComponentProps } from '.';
import { animationArgsType } from '../../../utils/animations-util/AnimationsUtil';

export default {
  component: AnimationComponent,
  title: 'General/Animation',
  argTypes: {
    animation: animationArgsType
  },
  args: {
    animation: undefined,
    animationDelay: '0',
    animationDuration: '300ms',
    animationDirection: 'normal',
    animationFillMode: 'none',
    animationIterationCount: '1',
    animationTimingFunction: 'ease',
    transformOrigin: 'top'
  }
} as Meta<AnimationComponentProps>;

const Template: Story<AnimationComponentProps> = (args) => <AnimationComponent {...args} />;

export const Playground = Template.bind({});
Playground.args = {
}