import React from "react";


import { Grid } from '@material-ui/core';

export default function News(props) {
    return (
        <>
            <Grid container justify="center" style={{ backgroundColor: "", paddingTop: "5%" }}>

                <Grid xs={12} item style={{ textAlign: "center", fontWeight: "bold", paddingTop: "3%" }} >
                    {"News of Our Group"}
                </Grid>
            </Grid>
        </>
    );

}