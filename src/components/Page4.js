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



class Page4 extends Component {
    state = {
        title: "Answer No. 4",
        sectionContext: [
            { lineMsg: "Task No. 4" },
            { lineMsg: "	Advance task  (use lodash.js)" },
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

export default Page4;