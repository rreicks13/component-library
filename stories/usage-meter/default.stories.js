import UsageMeter from '../../packages/usage-meter/src';
import React from 'react';
import propsMarkdown from '../utilities/props/usage-meter.md';
import { makeStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';

const useStyles = makeStyles({
    container: {
        padding: 20,
    },
    margin: {
        margin: 10,
    },
});

storiesOf('Usage Meter', module).add(
    'Default',
    () => {
        const classes = useStyles();

        return (
            <div className={classes.container}>
                <UsageMeter className={classes.margin} label={100} percentage={100} />
                <UsageMeter className={classes.margin} label={40} percentage={40} />
                <UsageMeter className={classes.margin} label={20} percentage={20} />
                <UsageMeter className={classes.margin} label={0} percentage={0} />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
