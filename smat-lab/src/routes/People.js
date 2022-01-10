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
            <SubPageWrapper title="Faculty/Researchers" profile={true}>
                <MyProfile name="Li Li"/>
                <MyProfile name="Xiao Chen"/>
            </SubPageWrapper>

            <SubPageWrapper title="Postgraduate Students" profile={true}>
                <MyProfile name="Haowei Quan"/>
                <MyProfile name="Mingyi Zhou"/>
                <MyProfile name="Yonghui Liu"/>
                <MyProfile name="Yue Liu"/>
                <MyProfile name="Tianming Liu"/>
                <MyProfile name="Jiawei Wang"/>
                <MyProfile name="Pei Liu"/>
                <MyProfile name="Yanjie Zhao"/>
                <MyProfile name="Xiaoyu Sun"/>
                <MyProfile name="Md Shamsujjoha"/>
            </SubPageWrapper>


            <SubPageWrapper title="RA/Visitors" profile={true}>
                <MyProfile name="Juncai Guo"/>
            </SubPageWrapper>

            <SubPageWrapper title="Alumni" profile={true}>
                <MyProfile name="Pingfan Kong"/>
                <MyProfile name="Jun Gao"/>
                <MyProfile name="Ayesha Sadiq"/>
                <MyProfile name="Dabao Wang"/>
            </SubPageWrapper>
        </PageWrapper>
    );

}