import React, {useEffect} from "react";
import PageWrapper from '../components/PageWrapper';
import SubPageWrapper from '../components/SubPageWrapper';
import MyLi from '../components/MyLi';
import MyLink from '../components/MyLink';
import Typography from '@material-ui/core/Typography';

export default function Publication(props) {
    useEffect(() => {
        document.title = "SMAT Lab - Publication"
    }, [])
    return (
        <PageWrapper showDivider={true} title="Publications of Our Group">

            <SubPageWrapper title="Summary: TOSEM * 7, TSE * 5, TDSC * 2, TIFS * 1, ICSE * 9, ESEC/FSE * 8, ASE * 8, ISSTA * 6, POPL * 1, PLDI * 1, TheWebConf * 6, ACL * 1"></SubPageWrapper>

            <SubPageWrapper title="ACM TOSEM">
                <MyLi>
                Pei Liu, Yanjie Zhao, Mattia Fazzini, Haipeng Cai, John Grundy, and Li Li, Automatically Detecting Incompatible Android APIs, ACM Transactions on Software Engineering and Methodology (TOSEM), 2023
                </MyLi>
                <MyLi>
                Kui Liu, Jingtang Zhang, Li Li, Anil Koyuncu, Dongsun Kim, Chunpeng Ge, Zhe Liu, Jacques Klein, Tegawende Bissyande, Reliable Fix Patterns Inferred from Static Checkers for Automated Program Repair, ACM Transactions on Software Engineering and Methodology (TOSEM), 2023
                </MyLi>
                <MyLi>
                Yanjie Zhao, Li Li, Haoyu Wang, Haipeng Cai, Tegawendé F. Bissyandé, Jacques Klein and John Grundy, On the Impact of Sample Duplication in Machine Learning based Android Malware Detection, ACM Transactions on Software Engineering and Methodology (TOSEM), 2021
                </MyLi>
                <MyLi>
                Xiaoyu Sun, Xiao Chen, Li Li, Haipeng Cai, John Grundy, Jordan Samhi, Tegawendé F. Bissyandé and Jacques Klein, Demystifying Hidden Sensitive Operations in Android apps, ACM Transactions on Software Engineering and Methodology (TOSEM), 2022
                </MyLi>
                <MyLi>
                Haoye Tian, Kui Liu, Yinghua Li, Abdoul Kader Kaboré, Anil Koyuncu, Andrew Habib, Li Li, Junhao Wen, Jacques Klein, Tegawendé F. Bissyandé, The Best of Both Worlds: Combining Learned Embeddings with Engineered Features for Accurate Prediction of Correct Patches, ACM Transactions on Software Engineering and Methodology (TOSEM), 2022
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
                Xiaoyu Sun, Xiao Chen, Yonghui Liu, John Grundy and Li Li, Taming Android Fragmentation through Lightweight Crowdsourced Testing, IEEE Transactions on Software Engineering (TSE), 2023
                </MyLi>
                <MyLi>
                Yanjie Zhao, Li Li, Haoyu Wang, Qiang He, and John Grundy, APIMatchmaker: Matching the Right APIs for Supporting the Development of Android Apps, IEEE Transactions on Software Engineering (TSE), 2022
                </MyLi>
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

            <SubPageWrapper title="IEEE TDSC">
                <MyLi>
                Lihong Tang, Tingmin Wu, Xiao Chen, Li Li, Xin Xia, Marthie Grobler, Yang Xiang. “How does Visualisation Help App Practitioners Analyse Android Apps?”. In IEEE Transactions on Dependable and Secure Computing (TDSC), 2022
                </MyLi>
                <MyLi>
                Yangyu Hu, Haoyu Wang, Yajin Zhou, Yao Guo, Li Li, Bingxuan Luo, Fangren Xu, Dating with Scambots: Understanding the Ecosystem of Fraudulent Dating Applications, IEEE Transactions on Dependable and Secure Computing (TDSC), 2019
                </MyLi>
               
            </SubPageWrapper>

            <SubPageWrapper title="IEEE TIFS">
                <MyLi>
                Li Li, Daoyuan Li, Tegawend{\'e} F. Bissyand{\'e}, Jacques Klein, Yves Le Traon, David Lo and Lorenzo Cavallaro, Understanding Android App Piggybacking: A Systematic Study of Malicious Code Grafting, IEEE Transactions on Information Forensics \& Security (TIFS), 2017
                </MyLi>
               
            </SubPageWrapper>

            <SubPageWrapper title="ICSE">
                <MyLi>Yanjie Zhao, Li Li, Kui Liu, John Grundy, Towards Automatically Repairing Compatibility Issues in Published Android Apps, The 44th International Conference on Software Engineering (ICSE 2022), 2022</MyLi>
                <MyLi>Zhensu Sun, Li Li, Yan Liu, Xiaoning Du, Li Li, On the Importance of Building High-quality Training Datasets for Neural Code Search, The 44th International Conference on Software Engineering (ICSE 2022), 2022</MyLi>
                <MyLi>Jordan Samhi, Li Li, Tegawendé F. Bissyandé, Jacques Klein, Difuzer: Uncovering Suspicious Hidden Sensitive Operations in Android Apps, The 44th International Conference on Software Engineering (ICSE 2022), 2022</MyLi>
                <MyLi>Jordan Samhi, Jun Gao, Nadia Daoudi, Pierre Graux, Henri Hoyez, Xiaoyu Sun, Kevin Allix, Tegawendé F. Bissyandé, Jacques Klein, JuCify: A Step Towards Android Code Unification for Enhanced Static Analysis, 44rd International Conference on Software Engineering (ICSE 2022), 2022</MyLi>
                <MyLi>
                Jiawei Wang, Li Li, Andreas Zeller, Restoring Execution Environments of Jupyter Notebooks, The 43rd ACM/IEEE International Conference on Software Engineering (ICSE 2021), 2021
                </MyLi>
                <MyLi>Pei Liu, Li Li, Yichun Yan, Mattia Fazzini and John Grundy, Identifying and Characterizing Silently-Evolved Methods in the Android API, The 43rd ACM/IEEE International Conference on Software Engineering, SEIP Track (ICSE-SEIP 2021), 2021</MyLi>
                <MyLi>Humphrey O. Obie, Waqar Hussain, Xin Xia, John Grundy, Li Li, Burak Turhan, Jon Whittle and Mojtaba Shahin, A First Look at Human Values-Violation in App Reviews, The 43rd ACM/IEEE International Conference on Software Engineering, SEIS Track (ICSE-SEIS 2021), 2021</MyLi>
                <MyLi>Kisub Kim, Dongsun Kim, Tegawendé F. Bissyandé, Eunjong Choi, Li Li, Jacques Klein, and Yves Le Traon, FaCoY – A Code-to-Code Search Engine, The 40th International Conference on Software Engineering (ICSE 2018), 2018</MyLi>
                <MyLi>Li Li, Alexandre Bartel, Tegawendé F. Bissyandé Jacques Klein, Yves Le Traon, Steven Arzt, Siegfried Rasthofer, Eric Bodden, Damien Octeau and Patrick McDaniel, IccTA: Detecting Inter-Component Privacy Leaks in Android Apps, The 37th International Conference on Software Engineering (ICSE 2015), 2015</MyLi>
                
            </SubPageWrapper>

            <SubPageWrapper title="ESEC/FSE">
                <MyLi>Zhensu Sun, Xiaoning Du, Fu Song, Li Li, CodeMark: Imperceptible Watermarking for Code Datasets against Neural Code Completion Models, The ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2023)</MyLi>
                <MyLi>Shangwen Wang, Mingyang Geng, Bo Lin, Zhensu Sun, Ming Wen, Yepang Liu, Li Li, Tegawendé F. Bissyandé, Xiaoguang Mao, Natural Language to Code: How Far are We? The ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2023)</MyLi>
                <MyLi>Yuhao Gao, Guoai Xu, Li Li, Xiapu Luo, Chenyu Wang, and Yulei Sui, Demystifying the Underground Ecosystem of Account Registration Bots, ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2022), 2022</MyLi>
                <MyLi>Wen Li, Li Li, and Haipeng Cai, On the Vulnerability Proneness of Multilingual Code, ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2022), 2022</MyLi>
                <MyLi>Bo Li, Qiang He, Feifei Chen, Xin Xia, Li Li, John Grundy, Yun Yang, Embedding App-Library Graph for Neural Third Party Library Recommendation, The 29th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2021), 2021</MyLi>
                <MyLi>Jiawei Wang, Li Li, Kui Liu, Haipeng Cai, Exploring How Deprecated Python Library APIs are (Not) Handled, The 28th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2020), 2020</MyLi>
                <MyLi>Jun Gao, Li Li, Pingfan Kong, Tegawendé F. Bissyandé and Jacques Klein, Borrowing Your Enemy’s Arrows: the Case of Code Reuse in Android via Direct Inter-app Code Invocation, The 28th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2020), 2020</MyLi>
                <MyLi>Feng Dong, Haoyu Wang, Li Li, Yao Guo, Tegawendé F. Bissyandé, Tianming Liu, Guoai Xu, and Jacques Klein, FraudDroid: Automated Ad Fraud Detection for Android Apps, The 26th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE 2018), 2018</MyLi>
            </SubPageWrapper>

            <SubPageWrapper title="ASE">
                <MyLi>Yonghui Liu, Xiao Chen, Pei Liu, John Grundy, Chunyang Chen, Li Li, ReuNify: A Step Towards Whole Program Analysis for React Native Android App, The 38th IEEE/ACM
International Conference on Automated Software Engineering (ASE2023)</MyLi>
                <MyLi>Xiaoyu Sun, Xiao Chen, Yanjie Zhao, Pei Liu, John Grundy and Li Li, Mining Android API Usage to Generate Unit Test Cases for Pinpointing Compatibility Issues, The 37th IEEE/ACM International Conference on Automated Software Engineering (ASE 2022), 2022</MyLi>
                <MyLi>Jiawei Wang, Tzu-yang Kuo, Li Li, Andreas Zeller, Assessing and Restoring Reproducibility of Jupyter Notebooks, The 35th IEEE/ACM International Conference on Automated Software Engineering (ASE 2020), 2020</MyLi>
                <MyLi>Xin Wang, Jin Liu, Li Li, Xiao Chen, Xiao Liu, Hao Wu, Detecting and Explaining Self-Admitted Technical Debts with Attention-based Neural Networks, The 35th IEEE/ACM International Conference on Automated Software Engineering (ASE 2020), 2020</MyLi>
                <MyLi>Haoye Tian, Kui Liu, Abdoul Kader Kaboré, Anil Koyuncu, Li Li, Jacques Klein, Tegawendé F. Bissyandé, Evaluating Representation Learning of Code Changes for Predicting Patch Correctness in Program Repair, The 35th IEEE/ACM International Conference on Automated Software Engineering (ASE 2020), 2020</MyLi>
                <MyLi>Xian Zhan, Lingling Fan, Tianming Liu, Sen Chen, Li Li, Haoyu Wang, Yifei Xu, Xiapu Luo and Yang Liu, Automated Third-party Library Detection for Android Applications: Are We There Yet?, The 35th IEEE/ACM International Conference on Automated Software Engineering (ASE 2020), 2020</MyLi>
                <MyLi>Tianming Liu, Haoyu Wang, Li Li, Guangdong Bai, Yao Guo and Guoai Xu, DaPanda: Detecting Aggressive Push Notification in Android Apps, The 34th IEEE/ACM International Conference on Automated Software Engineering (ASE 2019), 2019</MyLi>
                <MyLi>Lei Ma, Felix Juefei-Xu, Fuyuan Zhang, Jiyuan Sun, Minhui Xue, Bo Li, Chunyang Chen, Ting Su, Li Li, Yang Liu, Jianjun Zhao, and Yadong Wang, DeepGauge: Multi-Granularity Testing Criteria for Deep Learning Systems, The 33rd IEEE/ACM International Conference on Automated Software Engineering (ASE 2018), 2018</MyLi>
            </SubPageWrapper>

            <SubPageWrapper title="ISSTA">
                <MyLi>Mingyi Zhou, Xiang Gao, Jing Wu, John Grundy, Xiao Chen, Chunyang Chen, Li Li, ModelObfuscator: Obfuscating Model Information to Protect Deployed ML-based Systems, The ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA 2023)</MyLi>
                <MyLi>Pei Liu, Yanjie Zhao, Haipeng Cai, Mattia Fazzini, John Grundy, and Li Li, Automatically Detecting API-induced Compatibility Issues in Android Apps: A Reproducibility Study, The ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA 2022), 2022</MyLi>
                <MyLi>Pingfan Kong, Li Li, Jun Gao, Tegawendé Bissyandé, Jacques Klein, Mining Android Crash Fixes in the Absence of Issue- and Change-Tracking Systems, The 28th ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA 2019), 2019</MyLi>
                <MyLi>Haipeng Cai, Ziyi Zhang, Li Li, Xiaoqin Fu, A Large-Scale Study of Application Incompatibilities in Android, The 28th ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA 2019), 2019</MyLi>
                <MyLi>Li Li, Tegawendé F. Bissyandé, Haoyu Wang and Jacques Klein, CiD: Automating the Detection of API-related Compatibility Issues in Android Apps, The ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA 2018), 2018</MyLi>
                <MyLi>Li Li, Tegawendé F. Bissyandé, Damien Octeau and Jacques Klein, DroidRA: Taming Reflection to Support Whole-Program Analysis of Android Apps, The 2016 International Symposium on Software Testing and Analysis (ISSTA 2016), 2016</MyLi>
            </SubPageWrapper>

            <SubPageWrapper title="POPL">
                <MyLi>Damien Octeau, Somesh Jha, Matthew Dering, Patrick McDaniel, Alexandre Bartel, Li Li, Jacques Klein and Yves Le Traon, Combining Static Analysis with Probabilistic Models to Enable Market-Scale Android Inter-component Analysis, The 43rd Symposium on Principles of Programming Languages (POPL 2016), 2016</MyLi>
            </SubPageWrapper>

            <SubPageWrapper title="PLDI">
                <MyLi>Xiaolei Ren, Michael Ho, Jiang Ming, Jeff Y. Lei, Li Li, Unleashing the Hidden Power of Compiler Optimization on Binary Code Difference: An Empirical Study, The 42nd ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI 2021), 2021</MyLi>
            </SubPageWrapper>

            <SubPageWrapper title="TheWebConf (WWW)">
                <MyLi>Yanjie Zhao, Tianming Liu, Haoyu Wang, Yepang Liu, John Grundy, and Li Li, Are Mobile Advertisements in Compliance with App's Age Group? The ACM Web Conference (WWW 2023)</MyLi>
                <MyLi>Zhensu Sun, Xiaoning Du, Fu Song, Mingze Ni and Li Li, CoProtector: Protect Open-Source Code against Unauthorized Training Usage with Data Poisoning, The ACM Web Conference (WWW 2022), 2022</MyLi>
                <MyLi>Guosheng Xu, Siyi Li, Hao Zhou, Shucen Liu, Yutian Tang, Li Li, Xiapu Luo, Xusheng Xiao, Guoai Xu and Haoyu Wang, Lie to Me: Abusing the Mobile Content Sharing Service for Fun and Profit, The ACM Web Conference (WWW 2022), 2022</MyLi>
                <MyLi>Yuhao Gao, Haoyu Wang, Li Li, Xiapu Luo, Xuanzhe Liu and Guoai Xu, Demystifying Illegal Mobile Gambling Apps, The Web Conference 2021 (WWW 2021), 2021</MyLi>
                <MyLi>Tianming Liu, Haoyu Wang, Li Li, Xiapu Luo, Feng Dong, Yao Guo, Liu Wang, Tegawendé F. Bissyandé and Jacques Klein, MadDroid: Characterising and Detecting Devious Ad Content for Android Apps, The Web Conference 2020 (WWW 2020), 2020</MyLi>
                <MyLi>Yangyu Hu, Haoyu Wang, Ren He, Li Li, Gareth Tyson, Ignacio Castro, Yao Guo, Lei Wu, and Guoai Xu, Mobile App Squatting, The Web Conference 2020 (WWW 2020), 2020</MyLi>
            </SubPageWrapper>

            <SubPageWrapper title="ACL">
                <MyLi>Juncai Guo, Jin Liu, Yao Wan, Li Li, Pingyi Zhou, Modeling Hierarchical Syntax Structure with Triplet Position for Source Code Summarization, The 60th Annual Meeting of the Association for Computational Linguistics (ACL 2022), 2022</MyLi>
            </SubPageWrapper>

        </PageWrapper>

    );

}
