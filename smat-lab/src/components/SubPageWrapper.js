import React, { Fragment } from "react";

import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function SubPageWrapper(props) {
    return (
        <>
            <Grid xs={12} container justifyContent="flex-start" item>
                <Typography style={{ fontWeight: "900", fontSize: "20px", minWidth: "230px", padding: " 30px 0px 20px" }}>
                    {props.title}
                </Typography>
            </Grid>
            <Grid xs={12} container justifyContent="flex-start" item>
                {props.profile ?
                    <Grid container spacing={2}>
                        {props.children}
                    </Grid>
                    :
                    <ol style={{ margin: 0 }}>
                        {props.children}
                    </ol>
                }

            </Grid>
        </>
    );

}
