import React, { useState } from 'react';
import Radio from '../packages/radio/src/index';
import Typography from '@material-ui/core/Typography';

const RadioExamples = () => {
    const [withStringOptionsValue, setWithStringOptionsValue] = useState('');
    const stringOptions = ['Yes', 'No'];

    const [withObjectOptionsValue, setWithObjectOptionsValue] = useState(null);
    const objectOptions = [
        { value: '1', label: 'Yes' },
        { value: '2', label: 'No' },
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
                @tractorzoom/radio
            </Typography>
            <Radio
                label='Radio String Option'
                options={stringOptions}
                onChange={onChange(setWithStringOptionsValue)}
                rootProps={{ style: { marginTop: 20 } }}
                value={withStringOptionsValue}
            />
            <Radio
                label='Radio Object Option'
                options={objectOptions}
                onChange={onChange(setWithObjectOptionsValue)}
                rootProps={{ style: { marginTop: 20 } }}
                value={withObjectOptionsValue}
            />
        </div>
    );
};

export default RadioExamples;
