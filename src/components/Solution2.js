import React, { useState } from 'react';
import {
    Typography, 
    Card, CardActions, CardContent, CardMedia,
    Grid,  Container, Button
}
    from '@mui/material';
import MyImage from '../images/ferdie.png';
import PatImage from '../images/patrick.png';
import PamImage from '../images/pamela.png';
import MyWife from '../images/wife.png';
import PeterImage from '../images/peter.png';

const Solution2 = () => {
    const [employee, setEmployee] = useState({
        name: "Fernando Ferdie Dionisio",
        profilePic: MyImage,
        salary: "185999",
        designation: "Web Developer",
        department: "IT DEPARTMENT",
        Age: 22
    });
    const [family, setFamily] = useState([
        {
            RecordNo: 1,
            name: "Maricel Dionisio",
            profilePic: MyWife,
            age: 33,
            member: "Mother"
        }, {
            RecordNo: 2,
            name: "Pamela ",
            profilePic: PamImage,
            age: 16,
            member: "Daugther"
        }, {
            RecordNo: 3,
            name: "Patrick",
            profilePic: PatImage,
            age: 19,
            member: "Eldest Son"
        }]);
//for Part 3        
    const [objec3Profile, setProfile] = useState(PatImage);
    const [objec3Name, setObject3Name] = useState("Ferdie")
    const [objec3Salary, setObject3Salary] = useState(177000)

    const increaseSalary = () => {
        const newSalary  = objec3Salary + 10500
        setObject3Salary(newSalary)
    }

    const updateSecondIndex = () => {
        //updating array of object
        const famData = [...family];
        famData[1] = {
            RecordNo: 4,
            name: "Peter",
            profilePic: PeterImage,
            age: 11,
            member: "Youngest Son"
        };
        setFamily(famData);
    };


    let ctr = 0;
    const color = ["cyan", "green", "yellow", "black", "cyan", "yellow", "white"];
    return (
        <>
            <Container maxWidth="lg"  >
                <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                            Part 1
                        </Typography>
                        {family.map((fam) => {
                            const cardStyle = { maxWidth: 345, align: "center", background: color[ctr] };
                            ctr++;
                            return (
                                <React.Fragment key={fam.RecordNo}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {<p> </p>}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Object {ctr}
                                    </Typography>
                                    <Card sx={cardStyle}>
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

                                </React.Fragment>
                            )

                        })}
                        <Typography gutterBottom variant="h7" component="div">
                            Click the Buttom below to show
                            <p>the SECOND INDEX(object)</p><p> will be replaced/updated</p>
                            <p>by peter's info</p>
                        </Typography>
                        <Button
                            onClick={updateSecondIndex}
                            size="small" variant="contained" color="success">Replace Pamela with Peter's Info</Button>
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
                                <Typography variant="body2" color="text.secondary">
                                    DEPARTMENT : {employee.department}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Age : {employee.Age}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    onClick={() => setEmployee({ ...employee, salary: 333123, designation: "Lead Developer" })}
                                    size="small" variant="outlined" color="success">Promote To Lead Developer</Button>
                            </CardActions>
                            <Typography variant="body2" color="text.secondary">
                                Salary and Designation will be changed...
                            </Typography>
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
                                image={objec3Profile}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {objec3Name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    SALARY : {objec3Salary}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AGE : {employee.Age}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button 
                                onClick={ increaseSalary }
                                size="small" variant="outlined" color="warning">+10500 New Salary</Button>
                                <Button 
                                onClick={()=> setObject3Name ("Peter Dionisio")}
                                size="small" variant="outlined" color="success">Change Name</Button>
                                <Button 
                                onClick={()=> setProfile (PeterImage)} 
                                size="small" variant="outlined" color="error">Change Profile</Button>
                            </CardActions>
                        </Card>
                    </Grid   >
                </Grid   >
            </Container>

            {/* <button onClick={() => setEmployee({ ...employee, designation: "manager" })}></button> */}
        </>
    );
};

export default Solution2;