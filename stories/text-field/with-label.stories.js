import React from 'react';
import TextField from '../../packages/text-field/src';
import propsMarkdown from '../utilities/props/text-field.md';
import { storiesOf } from '@storybook/react';

storiesOf('Text Field', module).add(
    'With label and on change',
    () => {
        const [value, setValue] = React.useState('');

        let options = [];

        let i = 0;
        while (i < 10000) {
            options.push(`${i}`);
            i++;
        }

        const onChange = (event) => {
            setValue(event.target.value);
        };

        return <TextField label='Text Field' onChange={onChange} value={value} />;
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
