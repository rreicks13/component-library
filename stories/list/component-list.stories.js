import List from '../../packages/list/src';
import ListItem from './list-item';
import React from 'react';
import propsMarkdown from '../utilities/props/list.md';
import { storiesOf } from '@storybook/react';

storiesOf('List', module).add(
    'List',
    () => {
        const items = [
            <ListItem height={225} />,
            <ListItem height={225} />,
            <ListItem height={225} />,
            <ListItem height={225} />,
            <ListItem height={225} />,
            <ListItem height={225} />,
            <ListItem height={225} />,
            <ListItem height={225} />,
        ];

        const getItemSize = (index) => {
            const item = items[index];
            const defaultItemSize = 150;
            if (item) {
                return item.props.height;
            }
            return defaultItemSize;
        };

        return <List items={items} getItemSize={getItemSize} />;
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
