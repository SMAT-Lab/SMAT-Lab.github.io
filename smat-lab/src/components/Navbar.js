import React, { Component, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from '@material-ui/core';
import { Button } from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

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
    const QueryMinWidth720 = useMediaQuery('(min-width:720px)');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const navbarRef = React.useRef();


    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(navbarRef.current);
        console.log(event.currentTarget)
        console.log(event)

        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    useEffect(() => {
        if (QueryMinWidth720) {
            if (open) {
                setOpen(false);
            }
        }
    }, [QueryMinWidth720])

    const listenToPopstate = () => {
        setOpen(false);
     };

    window.addEventListener("popstate", listenToPopstate);



    return (
        <>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition style={{ width: "100%" }}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper style={{ width: `100%`, }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ParentComponent iconComponent={HomeRoundedIcon} title="Home" link='/#/' />
                                    <ParentComponent iconComponent={NewspaperRoundedIcon} title="News" link='/#/news' />
                                    <ParentComponent iconComponent={PeopleRoundedIcon} title="People" link='/#/people' />
                                    <ParentComponent iconComponent={LibraryBooksRoundedIcon} title="Publications" link='/#/publications' />
                                    <ParentComponent iconComponent={AccountTreeRoundedIcon} title="Projects" link='/#/projects' />
                                    <ParentComponent iconComponent={MilitaryTechRoundedIcon} title="Awards" link='/#/awards' />
                                </List>
                            </nav>
                        </Paper>
                    </Fade>
                )}
            </Popper>


            <Grid ref={navbarRef} container alignItems="center" justifyContent="center" style={{ position: 'fixed', zIndex: '999', top: 0, backgroundColor: "black", height: "52px", minWidth: "" }}>

                <Grid container item alignItems="center" style={{ maxWidth: '1344px', height: "100%", padding: "0 15px" }}>
                    <Grid container item xs={3} justifyContent="flex-start" >
                        <Typography style={{ fontWeight: "900", fontSize: "20px", color: "white", minWidth: "230px" }}>SMAT Lab@MONASH</Typography>
                    </Grid>

                    <Grid container item xs={9} justifyContent="flex-end" style={{ height: "100%" }}>
                        {QueryMinWidth720 ?
                            <>
                                <Navtab link="/" title='Home' />
                                <Navtab link="/news" title='News' />
                                <Navtab link="/people" title='People' />
                                <Navtab link="/publications" title='Publications' />
                                <Navtab link="/projects" title='Projects' />
                                <Navtab link="/awards" title='Awards' />
                            </>
                            :
                            <>
                                <Button onClick={handleClick('bottom-end')} variant="text" style={{ color: "white" }}>
                                    {open ?
                                        <HighlightOffRoundedIcon />
                                        :
                                        <MenuRoundedIcon />
                                    }
                                </Button>
                            </>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

function Navtab(props) {
    const classes = useStyles();
    return (
        <div style={{ padding: "0", margin: '0', height: "100%", textAlign: "center" }}>
            <Link to={props.link} className={classes.link} >{props.title}</Link>
        </div>

    )
}


function ParentComponent(props) {

    const IconComponent = props.iconComponent;
    return (
        <ListItem disablePadding>
            <ListItemButton component="a" href={props.link}>
                <ListItemIcon>
                    <IconComponent />
                </ListItemIcon>
                <ListItemText primary={props.title} />
            </ListItemButton>
        </ListItem>
    );
}

