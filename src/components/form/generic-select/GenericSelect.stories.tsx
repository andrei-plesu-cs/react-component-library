import React from 'react'

import { Meta, Story } from '@storybook/react';
import GenericSelectComponent, { GenericSelectComponentProps } from '.';

export default {
  component: GenericSelectComponent,
  title: 'Form/GenericSelect',
  args: {
    disabled: false,
    controlled: false,
    value: undefined
  },
  argTypes: {
    topContainerRenderer: { table: { disable: true } },
    itemsContainerRenderer: { table: { disable: true } },
    onIsOpenChange: { table: { disable: true } },
    value: { table: { disable: true } }
  }
} as Meta<GenericSelectComponentProps>;

export const Playground: Story<GenericSelectComponentProps> = 
    (args) => (
        <GenericSelectComponent {...args} />
    );
Playground.args = {
    disabled: false,
    topContainerRenderer: () => {
        return (
            <div style={{padding: '1rem', border: '1px solid black'}}>Top container</div>
        )
    },
    itemsContainerRenderer: () => {
        return (
            <div style={{padding: '1rem', border: '1px solid black'}}>
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
        )
    }
}