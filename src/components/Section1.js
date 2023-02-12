import React from 'react';

import {
    Typography, Container
}
    from '@mui/material';


const SectionMain = ({ sectionContent }) => {
    //console.log(sectionContent)
    let ctr = 0
    return (
        <>
            <Container maxWidth="sm"  >
                {sectionContent.map((item) => {
                    ctr++;
                    if (ctr > 1) {
                        return (
                            <React.Fragment key={ctr}>
                                <Typography variant='h7' align='left' color={"textSecondary"} paragraph>
                                    {item.lineMsg}
                                </Typography>

                            </React.Fragment>
                        )
                    }
                    else {
                        return (
                            <React.Fragment key={ctr}>
                                <Typography variant='h5' align='left' color={"textSecondary"} paragraph>
                                    {item.lineMsg}
                                </Typography>

                            </React.Fragment>
                        )
                    }
                })}
                                <Typography variant='h5' align='left' color={"textSecondary"} paragraph>
                                    Solution :
                                </Typography>                
            </Container>
        </>
    );
};

export default SectionMain;