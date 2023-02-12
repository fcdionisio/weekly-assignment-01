import React from 'react';
import { Link } from "react-router-dom";
import {
 Grid,  Container, Button
}
    from '@mui/material';

const BackToHome = () => {
    return (
        <>
            <Container maxWidth="sm"  >
                <div>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button variant='contained' color='primary'>
                                <Link
                                    style={{ textDecoration: "none", color: "white" }}
                                    to={"/"}>Back to home</Link>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export default BackToHome;