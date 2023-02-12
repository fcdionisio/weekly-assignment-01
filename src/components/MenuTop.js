import React from 'react';
import {
    Typography, AppBar,
    Card, CardActions, CardContent, CardMedia,
    CssBaseline, Grid, Toolbar, Container, Button
}
    from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Link } from "react-router-dom";

const MenuTop = () => {
    return (
        <>
            <CssBaseline />  {/* need to add */}
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography >
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={"/"}>Weekly Assignment
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default MenuTop;
