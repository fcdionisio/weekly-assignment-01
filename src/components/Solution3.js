import React, { useState } from 'react';
import {
    Container, Button, TextField
}
    from '@mui/material';

const Solution3 = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        age: 0,
        contact: "",
        nameErrorStatus: false,
        nameErrorMsg: "",
        emailErrorStatus: false,
        emailErrorMsg: "",
        ageErrorStatus: false,
        ageErrorMsg: "",
        contactErrorStatus: false,
        contactErrorMsg: "",
    })

    const validateField = (id, value) => {
        let typeError = "";
        let errorFlag = true;
        let pattern = "";

        switch (id) {
            case 'name':
                typeError = data.nameErrorMsg;
                errorFlag = data.nameErrorStatus;
                pattern = /^[A-Za-z\s]*$/;
                if (value.trim() == "") {
                    typeError = "Name field is required";
                    errorFlag = true;
                } else if (value.trim().length < 3 || !pattern.test(value)) {
                    typeError = "This is invalid Name";
                    errorFlag = true;
                } else {
                    typeError = "";
                    errorFlag = false;
                }
                setData({ ...data, name: value, nameErrorStatus: errorFlag, nameErrorMsg: typeError })
                break;
            case 'email':
                typeError = data.emailErrorMsg;
                errorFlag = data.emailErrorStatus;
                pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (value.trim() == "") {
                    typeError = "E-mail field is required";
                    errorFlag = true;
                } else if (value.trim().length < 3 || !pattern.test(value)) {
                    typeError = "This is invalid E-mail";
                    errorFlag = true;
                } else {
                    typeError = "";
                    errorFlag = false;
                }                
                setData({ ...data, email: value, emailErrorStatus: errorFlag, emailErrorMsg: typeError })
                break;
            case 'age':
                typeError = data.ageErrorMsg;
                errorFlag = data.ageErrorStatus;
                pattern = /^[0-9]*$/;
                if (value.trim() == "") {
                    typeError = "Age field is required";
                    errorFlag = true;
                } else if (value.trim().length >= 3 || !pattern.test(value)) {
                    typeError = "Invalid Age";
                    errorFlag = true;
                } else {
                    typeError = "";
                    errorFlag = false;
                }                 
                setData({ ...data, age: value, ageErrorStatus: errorFlag, ageErrorMsg: typeError })
                break;
            case 'contact':
                typeError = data.ageErrorMsg;
                errorFlag = data.ageErrorStatus;
                pattern = /^[0-9]*$/;
                if (value.trim() == "") {
                    typeError = "Contact Number field is required";
                    errorFlag = true;
                } else if (value.trim().length <= 6 || !pattern.test(value)) {
                    typeError = "Invalid Contact Number";
                    errorFlag = true;
                } else {
                    typeError = "";
                    errorFlag = false;
                }                  
                setData({ ...data, contact: value, contactErrorStatus: errorFlag, contactErrorMsg: typeError })
                break;
            default: console.log(id);
                break;
        }
        console.log(data)
        //set formvalidation
    }

    const updateState = (e) => {
        validateField(e.target.id, e.target.value);
    }

    const submitForm = (e) => {
        if (data.name == "" || data.email == "" || data.age == 0 || data.contact == "") {
            alert("Please fill-up Required fields...");
        } else if (data.nameErrorStatus || data.emailErrorStatus || data.ageErrorStatus || data.contactErrorStatus) {
            alert("INVALID field(s)...");
        } else {
            alert("FORM submitted!");
        }
    };

    return (
        <>
            <Container maxWidth="sm"  >
                <form >
                    <div key={"name"}>
                        <TextField
                            required
                            error={data.nameErrorStatus}
                            helperText={data.nameErrorMsg}
                            onChange={updateState}
                            id="name"
                            label="Name"
                            placeholder='Enter your name'
                            variant="standard"
                        />
                    </div>
                    <div key={"email"}>
                        <TextField
                            required
                            error={data.emailErrorStatus}
                            helperText={data.emailErrorMsg}                            
                            onChange={updateState}
                            id="email"
                            label="E-mail"
                            placeholder='Enter your E-mail'
                            variant="standard"
                        />
                    </div>
                    <div key={"age"}>
                        <TextField
                            required
                            error={data.ageErrorStatus}
                            helperText={data.ageErrorMsg}                            
                            onChange={updateState}
                            id="age"
                            label="Age"
                            placeholder='Enter your E-mail'
                            variant="standard"
                        />
                    </div>
                    <div key={"contact"}>
                        <TextField
                            required
                            error={data.contactErrorStatus}
                            helperText={data.contactErrorMsg}                            
                            onChange={updateState}
                            id="contact"
                            label="Contact"
                            placeholder='Enter your Contact Number'
                            variant="standard"
                        />
                    </div>
                    <div></div>
                    <div>
                        <Button
                            variant='contained' color='success'
                            onClick={submitForm}>
                            Submit
                        </Button>
                    </div>
                </form>
            </Container>
        </>
    )
};

export default Solution3;