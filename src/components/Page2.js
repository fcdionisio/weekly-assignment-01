import { React, Component } from 'react';
import { Link } from "react-router-dom";
import {
    Typography, AppBar,
    Card, CardActions, CardContent, CardMedia,
    CssBaseline, Grid, Toolbar, Container, Button
}
    from '@mui/material';
import Header from './Header';
import SectionMain from './Section1';
import BackToHome from './BackToHome';
import MenuTop from './MenuTop'



class Page2 extends Component {
    state = {
        title: "Answer No. 2",
        sectionContext: [
            { lineMsg: "Task No. 2	Complete below tasks using Hooks" },
            { lineMsg: "• Create an array of object and update its second index" },
            { lineMsg: "• Create an object, update it's 2 property values" },            
            { lineMsg: "• Practice all datatypes for state variable" },
        ]
    }
    render() {
        return (
            <>
                <MenuTop />
                <Header title={this.state.title} />
                <SectionMain sectionContent={this.state.sectionContext} />
                <BackToHome />
            </>
        );
    }
}

export default Page2;