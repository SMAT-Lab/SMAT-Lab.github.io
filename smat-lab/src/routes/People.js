import React, { useEffect} from "react";
import PageWrapper from '../components/PageWrapper';
import SubPageWrapper from '../components/SubPageWrapper';
import MyProfile from '../components/People/MyProfile';


export default function People(props) {
    useEffect(() => {
        document.title = "SMAT Lab - People"
    }, [])

    return (
        <PageWrapper showDivider={true} title="Our Group Members">
            <SubPageWrapper title="Faculty" profile={true}>
                <MyProfile name="Li Li"/>
            </SubPageWrapper>

            <SubPageWrapper title="Postgraduate Students" profile={true}>
                <MyProfile name="Yonghui Liu"/>
            </SubPageWrapper>

            <SubPageWrapper title="Undergraduate Students">

            </SubPageWrapper>

            <SubPageWrapper title="RA/Visitors" profile={true}>

            </SubPageWrapper>

            <SubPageWrapper title="Alumni" profile={true}>

            </SubPageWrapper>
        </PageWrapper>
    );

}