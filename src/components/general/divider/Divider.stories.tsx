import React from 'react'

import { Meta, Story } from '@storybook/react';
import DividerComponent, { DividerComponentProps } from '.';
import image from '../../../assets/images/profile-image-1.jpg';
import AvatarComponent from '../avatar/index';
import Text from '../../../styled-components/Text';

export default {
  component: DividerComponent,
  title: 'General/Divider',
  argTypes: {
    color: {
        description: 'Description for the color argument'
    },
    middleAreaRenderer: { table: { disable: true } }
  },
  args: {
    color: '#ececec',
    noSpace: false,
    hiddenContent: false
  }
} as Meta<DividerComponentProps>;

const Template: Story<DividerComponentProps> = (args) => <DividerComponent {...args} />;

export const Playground = Template.bind({});
Playground.args = {
    color: '#ececec'
}

export const WithAvatar = Template.bind({});
WithAvatar.args = {
    color: '#ececec',
    middleAreaRenderer: () => (
        <AvatarComponent imageSrc={image} size="medium" />
    )
}

export const WithText = Template.bind({});
WithText.args = {
    color: '#ececec',
    middleAreaRenderer: () => (
        <Text size="medium" fontColor="secondary">See reviews</Text>
    )
}