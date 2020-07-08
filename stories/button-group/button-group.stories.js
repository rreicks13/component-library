import ButtonGroup from '../../packages/button-group/src';
import React from 'react';
import propsMarkdown from '../utilities/props/button-group.md';
import { storiesOf } from '@storybook/react';

storiesOf('Button Group', module).add(
    '10 Button Group',
    () => (
        <ButtonGroup
            buttons={[
                { props: { title: 'First', variant: 'outlined' } },
                { props: { title: 'Second', variant: 'outlined' } },
                { props: { title: 'Third', variant: 'outlined' } },
                { props: { title: 'Fourth', variant: 'outlined' } },
                { props: { title: 'Fifth', variant: 'outlined' } },
                { props: { title: 'Sixth', variant: 'outlined' } },
                { props: { title: 'Seventh', variant: 'outlined' } },
                { props: { title: 'Eighth', variant: 'outlined' } },
                { props: { title: 'Nineth', variant: 'outlined' } },
                { props: { title: 'Tenth', variant: 'outlined' } },
            ]}
        />
    ),
    {
        notes: { markdown: propsMarkdown },
    }
);
