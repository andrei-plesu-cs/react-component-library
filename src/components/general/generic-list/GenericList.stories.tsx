import React from 'react'

import { Meta, Story } from '@storybook/react';
import GenericListComponent, { GenericListComponentProps } from '.';
import { IdItem } from '../../../utils/common-util/CommonUtils';
import ListItemComponent, { ListItemComponentProps } from '../list-item';
import { boxShadowArgTypes } from '../../../css-rulesets';

type ListItemType = ListItemComponentProps & IdItem;

type ItemType = {
    name: string;
} & IdItem;

const generateGenericItemsList = (N: number) => {
    let items: ListItemType[] = [];
    for(let i=0; i<N; i++) {
        items.push({
            id: i+1,
            title: `Item ${i+1}`,
            description: `This is item ${i+1}`,
            avatarProps: { imageSrc: 'https://picsum.photos/400' }
        })
    }

    return items;
}

export default {
  component: GenericListComponent,
  title: 'General/GenericList',
  args: {
    boxShadow: 'box-shadow-2',
    dimensions: undefined,
    itemRenderer: () => {},
    items: [],
    onBottomReach: () => {},
    onItemClick: () => {}
  },
  argTypes: {
    boxShadow: boxShadowArgTypes,
    onBottomReach: { action: 'onBottomReach', table: { disable: true } },
    itemRenderer: { table: { disable: true } },
    onItemClick:{ action: 'onItemClick', table: { disable: true } }
  }
} as Meta<GenericListComponentProps<any>>;

export const WithGenericItems: Story<GenericListComponentProps<ListItemType>> = 
    (args) => (
        <GenericListComponent {...args} />
    );
WithGenericItems.args = {
    items: generateGenericItemsList(4),
    itemRenderer: (item) => (
        <ListItemComponent
            {...item}
        />
    ),
    boxShadow: 'box-shadow-2'
}

export const WithCustomItems: Story<GenericListComponentProps<ItemType>> = 
    (args) => (
        <GenericListComponent {...args} />
    );
WithCustomItems.args = {
    items: [
        {
            id: 1, 
            name: 'Custom item 1'
        },
        {
            id: 2, 
            name: 'Custom item 2'
        },
        {
            id: 3, 
            name: 'Custom item 3'
        },
        {
            id: 4, 
            name: 'Custom item 4'
        },
    ],
    itemRenderer: (item): React.ReactNode => (
        <div style={{padding: '0.5rem 1rem'}}>{item.name}</div>
    ),
    boxShadow: 'box-shadow-2',
}

export const WithMaxHeightAndScrollableContent: Story<GenericListComponentProps<ListItemType>> = 
    (args) => (
        <GenericListComponent {...args} />
    );
WithMaxHeightAndScrollableContent.args = {
    items: generateGenericItemsList(12),
    itemRenderer: (item) => (
        <ListItemComponent
            {...item}
        />
    ),
    boxShadow: 'box-shadow-2',
    dimensions: {
        maxHeight: '400px'
    }
}