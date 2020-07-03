import Button from '../../packages/button/src';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import propsMarkdown from '../utilities/props/button.md';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module).add('Button With Icon', () => <Button startIcon={<SaveIcon />} title='Confirm' />, {
    notes: { markdown: propsMarkdown },
});
