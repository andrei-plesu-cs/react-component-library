import React from 'react'

import { Meta, Story } from '@storybook/react';
import { IdItem } from '../../../utils/common-util/CommonUtils';
import SelectComponent, { SelectComponentProps } from '.';
import ListItemComponent, { ListItemComponentProps } from '../../general/list-item';

type ListItemType = ListItemComponentProps & IdItem;

const generateGenericItemsList = (N: number) => {
    let items: ListItemType[] = [];
    for(let i=0; i<N; i++) {
        items.push({
            id: i+1,
            title: `Item ${i+1}`,
            description: `This is item ${i+1}`
        })
    }

    return items;
}

export default {
  component: SelectComponent,
  title: 'Form/Select',
  args: {
      isInvalid: false,
      disabled: false,
      errorMessage: '',
      searchEnabled: false,

  }
} as Meta<SelectComponentProps<any>>;

export const Playground: Story<SelectComponentProps<ListItemType>> = 
    (args) => (
        <SelectComponent {...args} />
    );
Playground.args = {
    items: generateGenericItemsList(4),
    itemRenderer: (item) => (
        <ListItemComponent
            {...item}
        />
    ),
    boxShadow: 'box-shadow-2',
    dimensions: { maxHeight: '300px' },
    selectedOptionRenderer: (item) => {
        return item?.title ?? '';
    },
    placeholder: 'Select component',
    searchEnabled: true,
    filterItemsBySearchValue: (inputValue, item) => {
        if (!inputValue) return true;
        if (!item?.title) return false;
        return item.title.indexOf(inputValue) >= 0;
    }
}