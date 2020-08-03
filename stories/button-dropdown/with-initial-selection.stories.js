import ButtonDropdown from '../../packages/button-dropdown/src';
import React from 'react';
import propsMarkdown from '../utilities/props/button-dropdown.md';
import { makeStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import chance from '@tractorzoom/chance-the-wrapper';

const useStyles = makeStyles({
    container: {
        padding: 20,
    },
});

const options = chance.n(chance.name, chance.d20());

storiesOf('Button Dropdown', module).add(
    'With initial selection',
    () => {
        const classes = useStyles();
        const [value, setValue] = React.useState(options[0]);

        return (
            <div className={classes.container}>
                <ButtonDropdown label='Sort By' onChange={setValue} options={options} selectedOption={value} />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
