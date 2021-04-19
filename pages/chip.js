import Chip from '../packages/chip/src';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const ChipExamples = () => {
    const handleClick = () => {
        alert('You clicked the Chip.');
    };

    const handleDelete = () => {
        alert('You deleted the Chip.');
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '40px auto',
                maxWidth: 800,
            }}
        >
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                @tractorzoom/chip
            </Typography>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: 10,
                    justifyContent: 'center',
                }}
            >
                <Chip label='Basic' style={{ margin: 4 }} />
                <Chip label='Active' active style={{ margin: 4 }} />
                <Chip label='Disabled' disabled style={{ margin: 4 }} />
                <Chip label='Clickable' onClick={handleClick} style={{ margin: 4 }} />
                <Chip label='Deletable' onDelete={handleDelete} style={{ margin: 4 }} />
            </div>
        </div>
    );
};

export default ChipExamples;
