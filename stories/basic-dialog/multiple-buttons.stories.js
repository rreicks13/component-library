import BasicDialog from '../../packages/basic-dialog/src';
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import propsMarkdown from '../utilities/props/basic-dialog.md';
import { storiesOf } from '@storybook/react';

storiesOf('Basic Dialog', module).add(
    'Multiple Buttons',
    () => (
        <BasicDialog
            actionButtons={[
                <Button key='close' onClick={() => {}} variant='contained'>
                    Close
                </Button>,
                <Button color='primary' key='confirm' onClick={() => {}} variant='contained'>
                    Confirm
                </Button>,
            ]}
            close={() => {}}
            isOpen={true}
            title='Dialog Title'
        >
            <Typography>Dialog content is passed in as children</Typography>
        </BasicDialog>
    ),
    {
        notes: { markdown: propsMarkdown },
    }
);
