import React, { useState } from 'react';
import {
    Typography, AppBar,
    Card, CardActions, CardContent, CardMedia,
    CssBaseline, Grid, Toolbar, Container, Button
}
    from '@mui/material';
import MyImage from '../images/ferdie.png';
import PatImage from '../images/patrick.png';
import PamImage from '../images/pamela.png';
import MyWife from '../images/wife.png';

const Solution2 = () => {
    const [employee, setEmployee] = useState({
        name: "Fernando Ferdie Dionisio",
        profilePic: MyImage,
        salary: "185999",
        designation: "Web Developer",
    });
    const [family, setFamily] = useState([
        {
            RecordNo : 1,
            name: "Ferdie Dionisio",
            profilePic: MyImage,
            age: 36,
            member: "Father"
        }, {
            RecordNo : 2,
            name: "Pamela ",
            profilePic: PamImage,
            age: 16,
            member: "Daugther"
        }, {
            RecordNo : 3,
            name: "Patrick",
            profilePic: PatImage,
            age: 19,
            member: "Eldest Son"
        }]);
    return (
        <>
            <Container maxWidth="lg"  >
                <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                            Part 1
                        </Typography>
                        {family.map((fam)=>{
                         return(
                            <>
                        <Card sx={{ maxWidth: 345, align: "center" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={fam.profilePic}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {fam.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Family Member : {fam.member}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Age : {fam.age}
                                </Typography>
                            </CardContent>
                        </Card>

                            </>
                         )   
                        })}
                        <Button size="small" variant="contained" color="success">Replace Pamela with Peter</Button>
                    </Grid   >
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                            Part 2
                        </Typography>
                        <Card sx={{ maxWidth: 345, align: "center" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={employee.profilePic}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {employee.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    SALARY : {employee.salary}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    DESIGNATION : {employee.designation}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined" color="warning">Increase Salary</Button>
                                <Button size="small" variant="outlined" color="success">Promote To Lead Developer</Button>
                            </CardActions>
                        </Card>
                    </Grid   >
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                            Part 3
                        </Typography>
                        <Card sx={{ maxWidth: 345, align: "center" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={employee.profilePic}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {employee.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    SALARY : {employee.salary}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    DESIGNATION : {employee.designation}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined" color="warning">Increase Salary</Button>
                                <Button size="small" variant="outlined" color="success">Promote To Lead Developer</Button>
                            </CardActions>
                        </Card>
                    </Grid   >
                </Grid   >
            </Container>

            <button onClick={() => setEmployee({ ...employee, designation: "manager" })}></button>
        </>
    );
};

export default Solution2;