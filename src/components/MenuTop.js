import React from 'react';
import {
    Typography, AppBar,
    Card, CardActions, CardContent, CardMedia,
    CssBaseline, Grid, Toolbar, Container, Button
}
    from '@mui/material';
    import { PhotoCamera } from '@mui/icons-material';

const MenuTop = () => {
    return (
        <>
            <CssBaseline />  {/* need to add */}
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography >
                        Weekly Assignment
                    </Typography>
                </Toolbar>
            </AppBar>            
        </>
    );
};

export default MenuTop;
