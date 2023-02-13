import React from 'react';
import lodash from 'lodash';

import {
    Typography, Grid, Container, Button
}
    from '@mui/material';

// PART A
const arrOne = [{
    id: 20,
    name: 'alex'

}, {
    id: 30,
    name: 'alina'
}]

const arrTwo = [{
    id: 40,
    name: 'hello'
}, {
    id: 30,
    name: 'world'
}]

// PART B
const str = ['u', 'ec']
const arrPartB = [{
    storageVal: 'u',
    table: ['E', 'F']
}, {
    storageVal: 'data',
    table: ['E', 'F']
}, {
    storageVal: 'ec',
    table: ['E']
}]

//Part C
const arrPartC = [['E'], ['F']];

//Part D
const arrPartD = [['E', 'F'], [['F'], ['G']]];


const Solution4 = () => {

    const showPartA = () => {
        const output = lodash.xor(arrOne, arrTwo)
        console.log(arrOne);
        console.log(arrTwo);
        console.log("Result of Part A: ")
        console.log(output);
    }

    const showPartB = () => {
        console.log("Result of Part B: ")
        const output = lodash.map(arrPartB, 'table');

        console.log(output);
    }

    const showPartC = () => {
        console.log("Result of Part C: ")
        const output = lodash.flatten(arrPartC);

        console.log(output);
    }

    const showPartD = () => {
        console.log("Result of Part D: ")
        const output = lodash.chain(arrPartD).uniq().value();

        console.log(output);

    }

    const showPartE = () => {
        console.log("Result of Part E: ")

        //console.log(output);
    }


    return (
        <>
            <Container maxWidth="sm"  >
                <Typography variant='h6' align='center' color={"textPrimary"} gutterBottom>
                    Press F12 to show the console log
                </Typography>
                <Typography variant='h6' align='center' color={"textSecondary"} paragraph>
                    {" "}
                </Typography>
                <div>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button onClick={showPartA} variant='contained' color='success'>
                                Show Part A - Symmetric Array
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography variant='h6' align='center' color={"textSecondary"} paragraph>
                        {" "}
                    </Typography>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button onClick={showPartB} variant='contained' color='success'>
                                Show Part B - Get all table
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography variant='h6' align='center' color={"textSecondary"} paragraph>
                        {" "}
                    </Typography>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button onClick={showPartC} variant='contained' color='success'>
                                Show Part C - Flatten an array
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography variant='h6' align='center' color={"textSecondary"} paragraph>
                        {" "}
                    </Typography>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button onClick={showPartD} variant='contained' color='success'>
                                Show Part D - Flatten an array II
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography variant='h6' align='center' color={"textSecondary"} paragraph>
                        {" "}
                    </Typography>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button onClick={showPartE} variant='contained' color='success'>
                                Show Part E - (optional)
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Container>
                <Typography variant='h6' align='center' color={"textSecondary"} paragraph>
                    {" "}
                </Typography>
            </Container>
        </>
    );
};

export default Solution4;