import Button from '@material-ui/core/Button';
import Link from 'next/link';
import React from 'react';

export default () => {
    return (
        <div
            style={{
                margin: '40px auto',
                maxWidth: 800,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Link href='/basic-dialog'>
                <Button variant='contained'>@tractorzoom/basic-dialog</Button>
            </Link>
            <Link href='/text-field'>
                <Button variant='contained'>@tractorzoom/text-field</Button>
            </Link>
        </div>
    );
};
