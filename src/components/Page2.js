import { React, Component } from 'react';

import Header from './Header';
import SectionMain from './Section1';
import BackToHome from './BackToHome';
import MenuTop from './MenuTop'
import Solution2 from './Solution2';



class Page2 extends Component {
    state = {
        title: "Answer No. 2",
        sectionContext: [
            { lineMsg: "Task No. 2	Complete below tasks using Hooks" },
            { lineMsg: "• Part 1: Create an array of object and update its second index" },
            { lineMsg: "• Part 2: Create an object, update it's 2 property values" },            
            { lineMsg: "• Part 3: Practice all datatypes for state variable" },
        ]
    }
    render() {
        return (
            <>
                <MenuTop />
                <Header title={this.state.title} />
                <SectionMain sectionContent={this.state.sectionContext} />
                <Solution2 />
                <BackToHome />
            </>
        );
    }
}

export default Page2;