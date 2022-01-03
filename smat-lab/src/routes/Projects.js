import React, { useEffect } from "react";
import PageWrapper from '../components/PageWrapper';
import SubPageWrapper from '../components/SubPageWrapper';
import MyLi from '../components/MyLi';
import MyLink from '../components/MyLink';
import { Grid } from '@material-ui/core';


export default function Projects(props) {
    useEffect(() => {
        document.title = "SMAT Lab - Projects"
    }, [])

    return (

        <PageWrapper showDivider={true} title="Software Projects">

            <SubPageWrapper title="Scalpel: The Python Static Analysis Framework" isProject={true} image={require("../utility/project/pic/scenic.jpg")}>                
                Scalpel is a Python Static Analysis Framework.
                It provides essential program analysis functions for facilitating the implementation of client applications focusing on statically resolving dedicated problems in Python code.
            </SubPageWrapper>

            <b>URL:</b> <MyLink href="https://github.com/SMAT-Lab/Scalpel">https://github.com/SMAT-Lab/Scalpel</MyLink>


            <SubPageWrapper title="AppScanner: Scanning Android apps for compatibility issues" isProject>
                AppScanner is an online apk scanning service developed by a group of Monash students.
                AppScanner aims at providing a reliable online scanning service for pinpointing compatibility issues in Android apps. AppScanner endeavors to take into account all the possible types of compatibility issues,
                including not only framework evolution-induced ones but also the device-specific ones brought by the tremendous fragmentation problem faced by the Android ecosystem.
            </SubPageWrapper>

            <b>URL:</b> <MyLink href="http://appscanner.com.au/">http://appscanner.com.au/</MyLink>
        </PageWrapper>

    );
}