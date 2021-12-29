import React, { useEffect } from "react";
import { Grid } from '@material-ui/core';
import moansh from '../components/Home/bridge.jpg'
import group from '../components/Home/group.jpg'

import Typography from '@material-ui/core/Typography';
import MyLink from '../components/MyLink';

export default function Home(props) {

    useEffect(() => {
        document.title = "SMAT Lab - Home"
    }, [])

    return (
        <Grid container justifyContent="center" style={{ width: "100%", }}>
            <Grid container item xs={12} style={{ height: "300px", backgroundColor: "rgba(0,0,0,0.4)", position: 'relative' }}>
                <img
                    src={moansh}
                    style={{
                        width: "100%",
                        height: "300px",
                        zIndex: "-1",
                        objectFit: "cover",
                    }}
                />
                <Grid xs={12} justifyContent="center" alignItems="center" item container style={{ textAlign: "center", position: "absolute", top: '50%', left: '50%', transform: ' translate(-50%, -50%)' }}>
                    <Grid xs={12} item container alignItems="center" style={{ maxWidth: '1344px', padding: "0 15px", height: "56px" }}>
                        <Typography align="justify" style={{ fontWeight: 900, color: "white", fontSize: "24px" }}>
                            {"Software Analysis and Trustworthy Computing Lab @ MONASH"}
                        </Typography>
                        <Typography align="justify" style={{ fontWeight: 600, color: "white", fontSize: "16px" }}>
                            {"Towards Engineering High-quality and Secure Software Systems for Social Good"}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


            {/* <Grid xs={12} item style={{ textAlign: "center", fontWeight: "bold", paddingTop: "3%" }} >
                {"SMart software Analysis and Trustworthy computing"}
            </Grid> */}
            <Grid justifyContent="center" alignItems="center" xs={12} item container style={{ maxWidth: '1344px', padding: "15px", }}>
                <Grid xs={12} item container style={{ padding: "15px" }} >
                    <LatestNewsLine>
                        <b style={{ fontWeight: 900, fontSize: "28px" }}>Latest News</b>  <span style={{ fontWeight: 700, fontSize: "18px" }}> (<MyLink href="/news">more</MyLink>) </span>
                    </LatestNewsLine>
                    <LatestNewsLine dateTime="SEP. 27, 2020">
                        Our work on assesing Android third-party library detection tools has been accepted to (<MyLink href="/news">TSE</MyLink>).
                    </LatestNewsLine>
                    <LatestNewsLine dateTime="SEP. 28, 2020">
                        Our work on assesing Android third-party library detection tools has been accepted to (<MyLink href="/news">TSE</MyLink>).
                    </LatestNewsLine>        
                </Grid>

                <Grid xs={12} item container style={{ padding: "15px" }} >
                    <Typography align="justify" style={{ fontWeight: 900, fontSize: "28px" }}>About Us</Typography>
                </Grid>

                <Grid justifyContent="flex-start" alignItems="flex-start" xs={12} spacing={2} item container style={{ padding: "0px", }} >
                    <Grid container item xs={12} sm={6} style={{ height: "" }}>
                        <img
                            src={group}
                            style={{
                                width: "100%",
                                height: "280px",
                                // position: "fixed",
                                zIndex: "-1",
                                objectFit: "cover",

                            }}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item container style={{ padding: "", }}>
                        <Grid xs={12} item container>
                            <Typography align="justify" style={{ fontWeight: "18px", fontWeight: "700", }}>Software Analysis and Trustworthy Computing Lab @ MONASH</Typography>
                        </Grid>
                        <Grid xs={12} item container>
                            <Typography align="justify" style={{ fontWeight: "18px" }}>SMATLab (Software Analysis and Trustworthy Computing Lab) is part of the Intelligent Software Engineering research group at Monash University. The lab is leaded by Dr. Li Li. We are interested in developing practical techniques to assure software quality and secure software systems for social good.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

function LatestNewsLine(props) {
    return (
        <Grid xs={12} item container style={{ paddingBottom: "13px" }} >
            <Typography align="justify" > {props.dateTime&&<b>[{props.dateTime}]</b>} {props.children}</Typography>
        </Grid>
    )
}