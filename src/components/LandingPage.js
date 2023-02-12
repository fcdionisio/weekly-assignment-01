import React from 'react';
import {
    Typography, AppBar,
    Card, CardActions, CardContent, CardMedia,
    CssBaseline, Grid, Toolbar, Container, Button
}
    from '@mui/material';

import { Link } from "react-router-dom";
import MenuTop from './MenuTop';



const LandingPage = (props) => {
    const { data } = props
    return (
        <>
            <MenuTop />
            <main>
                <div >
                    <Container maxWidth="sm"  >
                        <Typography variant='h2' align='center' color={"textPrimary"} gutterBottom>
                            {data.title}
                        </Typography>
                        <Typography variant='h5' align='center' color={"textSecondary"} paragraph>
                            {data.section}
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant='contained' color='info'>
                                        <Link 
                                        style={{textDecoration: "none", color:"white"}}
                                        to={"/Answer1"}>Answer No. 1</Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' color='success'>
                                    <Link 
                                        style={{textDecoration: "none", color:"white"}}
                                        to={"/Answer2"}>Answer No. 2</Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <br />
                                </Grid>
                                <Grid item>
                                    <br />
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant='contained' color='secondary'>
                                    <Link 
                                        style={{textDecoration: "none", color:"white"}}
                                        to={"/Answer3"}>Answer No. 3</Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' color='warning'>
                                    <Link 
                                        style={{textDecoration: "none", color:"white"}}
                                        to={"/Answer4"}>Answer No. 4</Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                    </Container>
                </div>
            </main>
        </>
    );
};

export default LandingPage;