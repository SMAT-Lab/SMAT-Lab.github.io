import React, { useEffect } from "react";
import PageWrapper from '../components/PageWrapper';
import MyLink from '../components/MyLink';
import MyLi from '../components/MyLi';


export default function Awards(props) {

    useEffect(() => {
        document.title = "SMAT Lab - Awards"
    }, [])

    return (
        <PageWrapper showDivider={true} title="Awards Obtained by Our Group">
            <ol>
                <MyLi >Dr. Li Li received an ACM SIGPLAN Distinguished Paper Award at PLDI 2021</MyLi>
                <MyLi>Our PhD student Jiawei Wang won Monash FIT Dean's Award for Research Excellence by a Graduate Research Student - SSC (2021)</MyLi>
                <MyLi>Dr. Li Li received the Best Student Paper Award at WWW 2020</MyLi>
                <MyLi>Dr. Li Li received an ACM SIGSOFT Distinguished Paper Award at ASE 2018</MyLi>
                <MyLi>Dr. Li Li received the FOSS Impact Paper Award at MSR 2018</MyLi>
                <MyLi>Dr. Li Li received the Best Paper Award at SANER-ERA 2016</MyLi>
            </ol>
        </PageWrapper>
    );
}

