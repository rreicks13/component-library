import Button from '../../packages/button/src';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import propsMarkdown from '../utilities/props/button.md';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module).add(
    'Loading Button With Icon',
    () => <Button isLoading={true} startIcon={<SaveIcon />} title='Confirm' />,
    {
        notes: { markdown: propsMarkdown },
    }
);
