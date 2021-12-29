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
            <SubPageWrapper title="Funded Research Projects (Ongoing)">    
                    <MyLi >
                        safsfsfsdsafsfsf
                        d <MyLink href="https://www.google.com/" >dsfdddds=+d</MyLink> d
                        sdsafsfsfsdsafsfsfsdsaf asfsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsd
                    </MyLi>

            </SubPageWrapper>
            <SubPageWrapper title="Funded Research Projects (Completed)">                
                    <MyLi >
                        safsfsfsdsafsfsf
                        d <MyLink href="https://www.google.com/" >dsfdddds=+d</MyLink> d
                        sdsafsfsfsdsafsfsfsdsaf asfsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsd
                    </MyLi>
           
            </SubPageWrapper>
        </PageWrapper>
    );
}