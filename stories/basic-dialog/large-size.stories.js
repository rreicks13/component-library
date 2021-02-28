import BasicDialog from '../../packages/basic-dialog/src';
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import propsMarkdown from '../utilities/props/basic-dialog.md';
import { storiesOf } from '@storybook/react';

storiesOf('Basic Dialog', module).add(
    'Large Size',
    () => (
        <BasicDialog
            actionButtons={[
                <Button onClick={() => {}} variant='contained'>
                    Close
                </Button>,
            ]}
            close={() => {}}
            isOpen={true}
            size='large'
            title='Dialog Title'
        >
            <Typography>Dialog content is passed in as children</Typography>
        </BasicDialog>
    ),
    {
        notes: { markdown: propsMarkdown },
    }
);
