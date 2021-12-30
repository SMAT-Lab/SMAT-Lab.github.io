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
                <MyLi >ACM SIGPLAN Distinguished Paper Award at PLDI 2021</MyLi>
                <MyLi>Best Student Paper Award at WWW 2020</MyLi>
                <MyLi>ACM SIGSOFT Distinguished Paper Award at ASE 2018</MyLi>
                <MyLi>FOSS Impact Paper Award at MSR 2018</MyLi>
                <MyLi>Best Paper Award at SANER-ERA 2016</MyLi>
            </ol>
        </PageWrapper>
    );
}

