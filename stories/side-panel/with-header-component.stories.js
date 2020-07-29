import SidePanel from '../../packages/side-panel/src';
import React from 'react';
import propsMarkdown from '../utilities/props/side-panel.md';
import { makeStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        padding: 20,
    },
    headerComponent: {
        color: 'white',
    },
});

storiesOf('Side Panel', module).add(
    'With header component',
    () => {
        const classes = useStyles();
        const [open, setOpen] = React.useState(true);

        return (
            <div className={classes.container}>
                <SidePanel
                    headerComponent={<Typography className={classes.headerComponent}>Header Text</Typography>}
                    open={open}
                    setOpen={setOpen}
                >
                    <Typography>First Child</Typography>
                    <Typography>Second Child</Typography>
                    <Typography>Third Child</Typography>
                </SidePanel>
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
