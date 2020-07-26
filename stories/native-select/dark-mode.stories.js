import NativeSelect from '../../packages/native-select/src';
import React from 'react';
import chance from '@tractorzoom/chance-the-wrapper';
import propsMarkdown from '../utilities/props/native-select.md';
import { storiesOf } from '@storybook/react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        backgroundColor: '#6c757d',
        padding: 20,
    },
});

const options = chance.n(
    () => ({
        label: chance.name(),
        value: chance.guid(),
    }),
    chance.d20()
);

storiesOf('Native Select', module).add(
    'With dark mode',
    () => {
        const classes = useStyles();

        return (
            <div className={classes.container}>
                <NativeSelect darkMode label='Name' options={options} />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
