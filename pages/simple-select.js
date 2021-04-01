import React, { useState } from 'react';
import SimpleSelect from '../packages/simple-select/src/index';
import TextField from '../packages/text-field/src/text-field';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    optionsSelect: {
        maxWidth: 60,
    },
    optionsInput: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    optionsSelectInput: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    optionsSelectLabel: {
        padding: `19px 12px 18px`,
    },
}));

const SimpleSelectExamples = () => {
    const classes = useStyles();
    const [withStringOptionsValue, setWithStringOptionsValue] = useState('ft');
    const stringOptions = ['ft', 'in'];

    const [withObjectOptionsValue, setWithObjectOptionsValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const objectOptions = [
        { value: '1', label: 'Tractor' },
        { value: '2', label: 'Zoom' },
    ];

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
                @tractorzoom/simple-select
            </Typography>
            <SimpleSelect
                helperText='String Options'
                label='Select String Option'
                options={stringOptions}
                onChange={onChange(setWithStringOptionsValue)}
                style={{ marginTop: 20 }}
                value={withStringOptionsValue}
            />
            <div style={{ marginTop: 20 }}>
                <TextField
                    helperText='Enabled'
                    label='Input Label'
                    InputProps={{ className: classes.optionsInput }}
                    onChange={onChange(setInputValue)}
                    value={inputValue}
                ></TextField>
                <SimpleSelect
                    className={classes.optionsSelect}
                    SelectProps={{ classes: { select: classes.optionsSelectLabel } }}
                    InputProps={{ className: classes.optionsSelectInput }}
                    options={stringOptions}
                    onChange={onChange(setWithStringOptionsValue)}
                    value={withStringOptionsValue}
                />
            </div>
            <SimpleSelect
                disabled
                helperText='Disabled'
                label='Select String Option'
                options={stringOptions}
                onChange={onChange(setWithStringOptionsValue)}
                style={{ marginTop: 20 }}
                value={withStringOptionsValue}
            />
            <SimpleSelect
                helperText={!!withObjectOptionsValue ? `You Selected: ${withObjectOptionsValue}` : 'Select an Option'}
                label='Select Object Option'
                options={objectOptions}
                onChange={onChange(setWithObjectOptionsValue)}
                style={{ marginTop: 20 }}
                value={withObjectOptionsValue}
            />
            <SimpleSelect
                error
                helperText='Errored'
                label='Select Option'
                options={objectOptions}
                onChange={onChange(setWithObjectOptionsValue)}
                style={{ marginTop: 20 }}
                value={withObjectOptionsValue}
            />
        </div>
    );
};

export default SimpleSelectExamples;
