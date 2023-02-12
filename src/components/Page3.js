import { React, Component } from 'react';

import Header from './Header';
import SectionMain from './Section1';
import BackToHome from './BackToHome';
import MenuTop from './MenuTop'
import Solution3 from './Solution3';



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
                <Solution3 />
                <BackToHome />
            </>
        );
    }
}

export default Page3;