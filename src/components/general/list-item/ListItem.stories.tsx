import React from 'react'

import { Meta, Story } from '@storybook/react';
import ListItemComponent, { ListItemComponentProps } from '.';

export default {
  component: ListItemComponent,
  title: 'General/ListItem',
  args: {
      description: '',
      title: ''
  }
} as Meta<ListItemComponentProps>;

const Template: Story<ListItemComponentProps> = 
    (args) => (
        <div style={{border: '1px solid gray'}}>
            <ListItemComponent {...args} />
        </div>
    );

export const TextOnly = Template.bind({});
TextOnly.args = {
    title: 'Only this text is present'
}

export const WithDescription = Template.bind({});
WithDescription.args = {
    title: 'List item with title and description',
    description: 'This is the description'
}

export const WithAvatar = Template.bind({});
WithAvatar.args = {
    title: 'List item with title and avatar',
    avatarProps: {
        imageSrc: 'https://picsum.photos/400'
    }
}

export const WithAvatarAndDescription = Template.bind({});
WithAvatarAndDescription.args = {
    title: 'List item with title, description and avatar',
    description: 'This is the description',
    avatarProps: {
        imageSrc: 'https://picsum.photos/400'
    }
}

export const WithHover = Template.bind({});
WithHover.args = {
    title: 'List item with title, description, avatar and hover functionality!',
    description: 'Hover over this item to see the functionality in action',
    avatarProps: {
        imageSrc: 'https://picsum.photos/400'
    },
    hover: {
        withHover: true,
        hoverBackground: 'lightgray',
        duration: 200,
        withPointerCursor: true
    }
}