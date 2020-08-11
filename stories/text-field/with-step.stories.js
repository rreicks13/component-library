import React from 'react';
import TextField from '../../packages/text-field/src';
import propsMarkdown from '../utilities/props/text-field.md';
import { storiesOf } from '@storybook/react';

storiesOf('Text Field', module).add(
    'With custom step',
    () => {
        const [value, setValue] = React.useState('');

        const onChange = (event) => {
            setValue(event.target.value);
        };

        return <TextField label='Text Field' onChange={onChange} step={1000} type='number' value={value} />;
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
