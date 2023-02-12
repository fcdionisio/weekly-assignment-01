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
import CardSample from './CardSample';



class Page1 extends Component {
    state = {
        title: "Answer No. 1",
        sectionContext: [
            { lineMsg: "Task No. 1" },
            { lineMsg: "• Create a HOC that add random color to background of 2 components." },
        ],
        component1: {
            name: "Component No. 1",
            description: "This is  a card no. 1. Random Color will be change if you CLICK the Show HOC effect button. You may refresh the page as well!"
        },
        component2: {
            name: "Component No. 2",
            description: "This is  a card no. 2. Random Color will be change if you CLICK the Show HOC effect button. You may refresh the page as well!"
        },
        

    }

    render() {
        return (
            <>
                <MenuTop />
                <Header title={this.state.title} />
                <SectionMain sectionContent={this.state.sectionContext} />
                <CardSample
                    cardName={this.state.component1.name} 
                    cardDescription={this.state.component1.description} 
                    />
                <CardSample
                    cardName={this.state.component2.name} 
                    cardDescription={this.state.component2.description} 
                    />

                <BackToHome />
            </>
        );
    }
}

export default Page1;