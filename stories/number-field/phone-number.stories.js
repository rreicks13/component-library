import NumberField from '../../packages/number-field/src';
import React, { useState } from 'react';
import propsMarkdown from '../utilities/props/number-field.md';
import { storiesOf } from '@storybook/react';

storiesOf('Number Field', module).add(
    'Phone Number',
    () => {
        const [value, setValue] = useState('');

        const onChange = (e) => {
            console.log('herrr', e.target.value);
            setValue(e.target.value);
        };

        return (
            <NumberField
                autoFocus={false}
                error={false}
                helperText='Ohhhh noooo'
                format='(###) ###-####'
                label='Phone Number'
                onChange={onChange}
                value={value}
            />
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
