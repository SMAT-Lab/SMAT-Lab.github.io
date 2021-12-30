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
            <SubPageWrapper title="ACM TOSEM">
                
                <MyLi>
                Yanjie Zhao, Li Li, Haoyu Wang, Haipeng Cai, Tegawendé F. Bissyandé, Jacques Klein and John Grundy, On the Impact of Sample Duplication in Machine Learning based Android Malware Detection, ACM Transactions on Software Engineering and Methodology (TOSEM), 2021
                </MyLi>
                <MyLi>
                Xiaoyu Sun, Li Li, Tegawendé F. Bissyandé, Jacques Klein, Damien Octeau, John Grundy, Taming Reflection: An Essential Step Towards Whole-Program Analysis of Android Apps, ACM Transactions on Software Engineering and Methodology (TOSEM), 2020
                </MyLi>
                <MyLi>
                Xiaoqin Fu, Haipeng Cai, Wen Li, and Li Li, Seads: Scalable and cost-effective dynamic dependence analysis of distributed systems via reinforcement learning, ACM Transactions on Software Engineering and Methodology (TOSEM), 2020
                </MyLi>
                
            </SubPageWrapper>
            <SubPageWrapper title="IEEE TSE">
                <MyLi>
                Xian Zhan, Tianming Liu, Yepang Liu, Yang Liu, Li Li, Haoyu Wang, Xiapu Luo, A Systematic Assessment on Android Third-party Library Detection Tools, IEEE Transactions on Software Engineering, 2021 
                </MyLi>
                <MyLi>
                Xian Zhan, Tianming Liu, Lingling Fan, Li Li, Sen Chen, Xiapu Luo, Yang Liu, Research on Third-Party Libraries in Android Apps: A Taxonomy and Systematic Literature Review, IEEE Transactions on Software Engineering, 2021
                </MyLi>
                <MyLi>
                Li Li, Tegawendé F. Bissyandé, Jacques Klein, Rebooting Research on Detecting Repackaged Android Apps: Literature Review and Benchmark, IEEE Transactions on Software Engineering (TSE), 2019
                </MyLi>
               
            </SubPageWrapper>
            <SubPageWrapper title="ICSE">
                <MyLi>
                Jiawei Wang, Li Li, Andreas Zeller, Restoring Execution Environments of Jupyter Notebooks, The 43rd ACM/IEEE International Conference on Software Engineering (ICSE 2021), 2021
                </MyLi>
                
            </SubPageWrapper>

        </PageWrapper>

    );

}