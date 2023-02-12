import React, {useState} from 'react';
import {
    Typography, AppBar,
    Card, CardActions, CardContent, CardMedia,
    CssBaseline, Grid, Toolbar, Container, Button
}
    from '@mui/material';
import { Link } from "react-router-dom";
import HOC from "./HOC";
import myImage  from '../images/php-logo.png';

const CardSample = ({ cardName, cardDescription, newColor }) => {
    const cardBC = { maxWidth: 345, backgroundColor: newColor }
    const reloadMe = function refreshPage(){ 
        window.location.reload(); 
    }
    return (
        <Container maxWidth="sm" align="center"  >
            <Card sx={cardBC}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={myImage}
                    title="Card Title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cardDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        variant='contained'
                        color="warning"
                        onClick={reloadMe}
                    >
{/*                         <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={"/Answer1"}>
                            Show HOC effect
                        </Link> */}
                        Show HOC effect...
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default HOC(CardSample);