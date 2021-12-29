import React, { Fragment } from "react";

import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@mui/material/Divider';

export default function PageWrapper(props) {
    return (
        <Grid container alignItems="center" justifyContent="center" style={{ backgroundColor: "", height: "100%", minWidth: "" }}>
            <Grid container item alignItems="center" justifyContent="center" style={{ maxWidth: '1344px', height: "100%", padding: "0 15px" }}>
                <Grid xs={12} container justifyContent="flex-start" item style={{ fontWeight: "bold", height: "100%", backgroundColor: "" }} >
                    <Typography style={{ fontWeight: "900", fontSize: "30px", minWidth: "230px", padding: " 30px 0px 20px" }}> {props.title}</Typography>
                </Grid>
                {props.showDivider &&
                    <Divider style={{ height: "1px", width: '100%', }} />
                }
                <Grid xs={12} container justifyContent="flex-start" item>
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    );

}
