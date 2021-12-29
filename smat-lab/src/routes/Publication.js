import React, {useEffect} from "react";
import PageWrapper from '../components/PageWrapper';
import SubPageWrapper from '../components/SubPageWrapper';
import MyLi from '../components/MyLi';
import MyLink from '../components/MyLink';


export default function Publication(props) {
    useEffect(() => {
        document.title = "SMAT Lab - Publication"
    }, [])
    return (
        <PageWrapper showDivider={true} title="Publications of Our Group">
            <SubPageWrapper title="Conference/Symposium/Workshop Papers">
                
                <MyLi>Xian Zhan, Tianming Liu, Yepang Liu, Yang Liu, Li Li, Haoyu Wang, Xiapu Luo, A Systematic Assessment on Android Third-party Library Detection Tools, IEEE Transactions on Software Engineering, 2021 </MyLi>
                <MyLi>Xian Zhan, Tianming Liu, Yepang Liu, Yang Liu, Li Li, Haoyu Wang, Xiapu Luo, A Systematic Assessment on Android Third-party Library Detection Tools, IEEE Transactions on Software Engineering, 2021 </MyLi>
                
            </SubPageWrapper>
            <SubPageWrapper title="Journal/Magazine Papers">
                <MyLi>Xian Zhan, Tianming Liu, Yepang Liu, Yang Liu, Li Li, Haoyu Wang, Xiapu Luo, A Systematic Assessment on Android Third-party Library Detection Tools, IEEE Transactions on Software Engineering, 2021 </MyLi>
               
            </SubPageWrapper>
            <SubPageWrapper title="Conference/Symposium/Workshop Papers Prior to 2018">
                <MyLi>Xian Zhan, Tianming Liu, Yepang Liu, Yang Liu, Li Li, Haoyu Wang, Xiapu Luo, A Systematic Assessment on Android Third-party Library Detection Tools, IEEE Transactions on Software Engineering, 2021 </MyLi>
                
            </SubPageWrapper>
            <SubPageWrapper title="Journal/Magazine Papers Prior to 2018">
                <MyLi>Xian Zhan, Tianming Liu, Yepang Liu, Yang Liu, Li Li, Haoyu Wang, Xiapu Luo, A Systematic Assessment on Android Third-party Library Detection Tools, IEEE Transactions on Software Engineering, 2021 </MyLi>
                
            </SubPageWrapper>
        </PageWrapper>

    );

}