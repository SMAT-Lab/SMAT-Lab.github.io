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
                <MyLi >
                    safsfsfsdsafsfsf
                    d <MyLink href="https://www.google.com/" >dsfdddds=+d</MyLink> d
                    sdsafsfsfsdsafsfsfsdsaf asfsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsdsafsfsfsd
                </MyLi>
                <MyLi>In another bowl, mix eggs, milk, and oil.</MyLi>
                <MyLi>Stir both mixtures together.</MyLi>
                <MyLi>Fill muffin tray 3/4 full.</MyLi>
                <MyLi>Bake for 20 minutes.</MyLi>
            </ol>
        </PageWrapper>
    );
}

