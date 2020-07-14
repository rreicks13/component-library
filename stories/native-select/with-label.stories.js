import NativeSelect from '../../packages/native-select/src';
import React from 'react';
import chance from '@tractorzoom/chance-the-wrapper';
import propsMarkdown from '../utilities/props/native-select.md';
import { storiesOf } from '@storybook/react';

const options = chance.n(
    () => ({
        label: chance.name(),
        value: chance.guid(),
    }),
    chance.d20()
);

storiesOf('Native Select', module).add('With Label', () => <NativeSelect label='Name' options={options} />, {
    notes: { markdown: propsMarkdown },
});
