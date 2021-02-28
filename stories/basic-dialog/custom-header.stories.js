import BasicDialog from '../../packages/basic-dialog/src';
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import propsMarkdown from '../utilities/props/basic-dialog.md';
import { storiesOf } from '@storybook/react';

storiesOf('Basic Dialog', module).add(
    'Custom Header',
    () => (
        <BasicDialog
            actionButtons={[
                <Button onClick={() => {}} variant='contained'>
                    Close
                </Button>,
            ]}
            close={() => {}}
            headerComponent={
                <Typography style={{ background: 'blue', color: 'white', fontSize: 24, padding: 20 }}>
                    This is my custom header
                </Typography>
            }
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
