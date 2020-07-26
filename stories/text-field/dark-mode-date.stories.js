import React from 'react';
import TextField from '../../packages/text-field/src';
import { makeStyles } from '@material-ui/core/styles';
import propsMarkdown from '../utilities/props/text-field.md';
import { storiesOf } from '@storybook/react';

const useStyles = makeStyles({
    container: {
        backgroundColor: '#6c757d',
        padding: 20,
    },
});

storiesOf('Text Field', module).add(
    'With dark mode and date',
    () => {
        const classes = useStyles();
        const [value, setValue] = React.useState('');

        let options = [];

        let i = 0;
        while (i < 10000) {
            options.push(`${i}`);
            i++;
        }

        const onChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <div className={classes.container}>
                <TextField darkMode label='Text Field' onChange={onChange} type='date' value={value} />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
