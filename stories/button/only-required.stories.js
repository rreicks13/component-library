import Button from '../../packages/button/src';
import React from 'react';
import propsMarkdown from '../utilities/props/button.md';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module).add('Only Required Props', () => <Button title='Confirm' />, {
    notes: { markdown: propsMarkdown },
});
