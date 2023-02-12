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



class Page3 extends Component {
    state = {
        title: "Answer No. 3",
        sectionContext: [
            { lineMsg: "Task No. 3" },
            { lineMsg: "Create a form using Functional Component. Add validation. (Controlled Input)" },
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

export default Page3;