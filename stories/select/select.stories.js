import Select from '../../packages/select/src';
import React from 'react';
import chance from '@tractorzoom/chance-the-wrapper';
import propsMarkdown from '../utilities/props/select.md';
import { makeStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';

const useStyles = makeStyles({
    container: {
        padding: 20,
    },
});

const options = chance.n(chance.word, 10000);

storiesOf('Select', module).add(
    'With 10000 options',
    () => {
        const classes = useStyles();
        const [value, setValue] = React.useState('');

        const onChange = (event, value) => {
            if (value) {
                setValue(value);
            } else {
                setValue('');
            }
        };

        return (
            <div className={classes.container}>
                <Select label='Virtualized Select' onChange={onChange} options={options} selectedOption={value} />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
