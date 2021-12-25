import React, {Fragment} from "react";

import { Grid } from '@material-ui/core';

export default function Home(props) {
    return (
        <Fragment>
            <Grid container justify="center" style={{ backgroundColor: "", paddingTop: "5%" }}>

                <Grid xs={12} item style={{ textAlign: "center", fontWeight: "bold", paddingTop: "3%" }} >
                {"SMart software Analysis and Trustworthy computing"}
                </Grid>
            </Grid>
        </Fragment>
    );

}