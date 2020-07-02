import BasicDialog from '../../packages/basic-dialog/src';
import React from 'react';
import propsMarkdown from '../utilities/props/basic-dialog.md';
import { storiesOf } from '@storybook/react';

storiesOf('Basic Dialog', module).add(
    'Only Required Props',
    () => <BasicDialog close={() => {}} isOpen={true} title='Dialog Title' />,
    {
        notes: { markdown: propsMarkdown },
    }
);
