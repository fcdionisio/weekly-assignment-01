import { React, Component } from 'react';
import Header from './Header';
import SectionMain from './Section1';
import BackToHome from './BackToHome';
import MenuTop from './MenuTop'
import Solution4 from './Solution4';



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
                <Solution4 />

                <BackToHome />
            </>
        );
    }
}

export default Page4;