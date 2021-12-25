import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-block",
        alignItems: "center",

    },
    paper: {
        marginRight: theme.spacing(2),
    },
    link: {
        fontWeight: "bold",
        textDecoration: "none",
        color: "white",
        '&:hover': {
            textDecoration: "none",
            color: "white",
            backgroundColor: "rgb(51, 115, 198)",
            
        },
        display: "flex",
        padding: "0 8px",
        height: "100%",
        alignItems: "center",

    },


}));


export default function Navbar(props) {
    const classes = useStyles();




    return (
        <Grid container alignItems="center" justifyContent="center" style={{ backgroundColor: "black",  height: "52px", minWidth:"720px"}}>
            <Grid container item alignItems="center" style={{  maxWidth:'1344px', height: "100%", padding:"0 15px"}}>
                <Grid container item xs={3} justifyContent="flex-start" >
                    <Typography style={{ fontWeight: "900", fontSize: "20px", color: "white", minWidth:"230px", paddingLeft: "8px"}}>SMAT Lab@MONASH</Typography>
                </Grid>
                
                <Grid container item xs={9} justifyContent="flex-end" style={{ padding: "0", margin: '0', height: "100%", minWidth: "480px"}}>
                    <Navtab link="/" title='Home' />
                    <Navtab link="/news" title='News' />
                    <Navtab link="/people" title='People' />
                    <Navtab link="/publications" title='Publications' />
                    <Navtab link="/projects" title='Projects' />
                    <Navtab link="/awards" title='Awards' />
                </Grid>
            </Grid>
        </Grid>
    )
}

function Navtab(props) {
    const classes = useStyles();
    return (
        <div style={{ padding: "0", margin: '0', height: "100%", textAlign: "center"}}>
            <Link to={props.link} className={classes.link} >{props.title}</Link>
        </div>

    )
}