import React, { useEffect} from "react";
import PageWrapper from '../components/PageWrapper';
import SubPageWrapper from '../components/SubPageWrapper';
import MyLi from '../components/MyLi';
import MyLink from '../components/MyLink';

export default function Projects(props) {
    useEffect(() => {
        document.title = "SMAT Lab - Projects"
    }, [])

    return (

        <PageWrapper showDivider={true} title="Projects of Our Group">

            <SubPageWrapper title="Software Projects">    
                    <MyLi> 
                    <Grid xs={12} sm={6} item container style={{ padding: "", }}>
                        <Grid xs={12} item container>
                            <Typography align="justify" style={{ fontWeight: "18px", fontWeight: "700", }}>Scalpel: The Python Static Analysis Framework</Typography>
                        </Grid>
                        <Grid xs={12} item container>
                            <Typography align="justify" style={{ fontWeight: "18px" }}>
                                Scalpel is a Python Static Analysis Framework. 
                                It provides essential program analysis functions for facilitating the implementation of client applications focusing on statically resolving dedicated problems in Python code.
                            </Typography>
                        </Grid>
                        <Grid xs={12} item container>
                            <Typography align="justify" style={{ fontWeight: "18px" }}>
                                Website: https://github.com/SMAT-Lab/Scalpel
                            </Typography>
                        </Grid>
                    </Grid>
                    </MyLi>
            </SubPageWrapper>


            <SubPageWrapper title="Funded Research Projects (Ongoing)">    
                    
            </SubPageWrapper>
            <SubPageWrapper title="Funded Research Projects (Completed)">  
            <!--              
                    <MyLi >
                        safsfsfsdsafsfsf
                        d <MyLink href="https://www.google.com/" >dsfdddds=+d</MyLink> d
                        sdsafsfsfsdsafsfsfsdsaf asfsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsd
                    </MyLi>
           -->
            </SubPageWrapper>
        </PageWrapper>
    );
}