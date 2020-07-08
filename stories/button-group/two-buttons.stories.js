import ButtonGroup from '../../packages/button-group/src';
import React from 'react';
import propsMarkdown from '../utilities/props/button-group.md';
import { storiesOf } from '@storybook/react';

storiesOf('Button Group', module).add(
    'Two Button Group',
    () => (
        <ButtonGroup
            buttons={[
                { props: { title: 'First', variant: 'outlined' } },
                { props: { title: 'Second', variant: 'outlined' } },
            ]}
        />
    ),
    {
        notes: { markdown: propsMarkdown },
    }
);
