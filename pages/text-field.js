import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '../packages/text-field/src/index';
import Typography from '@material-ui/core/Typography';

const TextFieldExamples = () => {
    const [withLabelValue, setWithLabelValue] = useState('');
    const [withCustomStepValue, setWithCustomStepValue] = useState(null);
    const [withEndAdornmentValue, setWithEndAdornmentValue] = useState(null);
    const [withErrorEndAdornmentValue, setWithErrorEndAdornmentValue] = useState(null);

    const onChange = (setterFunc) => (event) => {
        setterFunc(event.target.value);
    };

    return (
        <div
            style={{
                margin: '40px auto',
                maxWidth: 800,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography style={{ textAlign: 'center' }} variant='h4'>
                @tractorzoom/text-field
            </Typography>
            <TextField
                label='Input Label'
                onChange={onChange(setWithLabelValue)}
                style={{ marginTop: 20 }}
                value={withLabelValue}
            />
            <TextField
                disabled
                helperText='Disabled'
                label='Input Label'
                onChange={onChange(setWithLabelValue)}
                style={{ marginTop: 20 }}
                value={withLabelValue}
            />
            <TextField
                error
                helperText='Errored'
                label='Input Label'
                onChange={onChange(setWithLabelValue)}
                style={{ marginTop: 20 }}
                value={withLabelValue}
            />
            <TextField
                helperText='Number input with custom step'
                label='Input Label'
                onChange={onChange(setWithCustomStepValue)}
                step={1000}
                style={{ marginTop: 20 }}
                type='number'
                value={withCustomStepValue}
            />
            <TextField
                helperText='Custom end adornment'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>ft</InputAdornment>,
                }}
                label='Width'
                onChange={onChange(setWithEndAdornmentValue)}
                style={{ marginTop: 20 }}
                type='number'
                value={withEndAdornmentValue}
            />
            <TextField
                error
                helperText='Errored with custom end adornment'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>ft</InputAdornment>,
                }}
                label='Width'
                onChange={onChange(setWithErrorEndAdornmentValue)}
                style={{ marginTop: 20 }}
                type='number'
                value={withErrorEndAdornmentValue}
            />
        </div>
    );
};

export default TextFieldExamples;
