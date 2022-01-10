import React, { Fragment } from "react";

import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function SubPageWrapper(props) {
    return (
        <>
            <Grid xs={12} container justifyContent="flex-start" item>
                <Typography style={{ fontWeight: "900", fontSize: "20px", minWidth: "230px", paddingTop: "30px", paddingBottom: props.isProject ? "0px" : "20px" }}>
                    {props.title}
                </Typography>
            </Grid>
            <Grid xs={12} container justifyContent="flex-start" item style={{ paddingBottom: "10px" }}>
                {props.isProject ?
                    <>
                        {
                            props.image ?
                                <>
                                    <Grid container item xs={12} sm={4}  >
                                        <img
                                            src={props.image}
                                            style={{
                                                width: "100%",
                                                height: "280px",
                                                zIndex: "-1",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Grid>

                                    <Grid container item xs={12} sm={8}>
                                        <Typography align="justify" style={{ fontWeight: "18px", padding: "6px 10px 0", }}>
                                            {props.children}
                                        </Typography>
                                    </Grid>
                                </>
                                :
                                <Typography align="justify" style={{ fontWeight: "18px", padding: "6px 10px 0" }}>
                                    {props.children}
                                </Typography>
                        }
                    </>
                    :
                    <>
                        {props.profile ?
                            <Grid container spacing={2}>
                                {props.children}
                            </Grid>
                            :
                            <ol style={{ margin: '4px 0' }}>
                                {props.children}
                            </ol>
                        }
                    </>
                }
            </Grid>
        </>
    );

}
