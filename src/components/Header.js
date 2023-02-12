import React from 'react';

import {
    Typography, AppBar,
    Card, CardActions, CardContent, CardMedia,
    CssBaseline, Grid, Toolbar, Container
}
    from '@mui/material';


const Header = (props) => {
    const {title} = props
    //console.log(title)
    return (
        <>
            <Container maxWidth="sm"  >
                <Typography variant='h2' align='center' color={"textPrimary"} gutterBottom>
                    {title}
                </Typography>
            </Container>
        </>
    );
};

export default Header;
