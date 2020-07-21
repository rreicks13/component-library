import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';

const ListItem = () => {
    return (
        <Card style={{ height: 'auto', width: '100%' }}>
            <CardHeader title='List Item' />
            <CardContent>
                <TextField fullWidth label='Input Field' variant='outlined' />
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button color='primary' onClick={() => {}}>
                    Super Button
                </Button>
            </CardActions>
        </Card>
    );
};

export default ListItem;
