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

const options = chance.n(() => ({ label: chance.word() }), chance.d20());

storiesOf('Select', module).add(
    'With object options',
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
                <Select
                    filterKeys={['label']}
                    label='Virtualized Select'
                    onChange={onChange}
                    options={options}
                    selectedOption={value}
                />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
