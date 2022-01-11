import React from 'react'
import MyLink from '../MyLink';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import allMemberProfile from '../../utility/profile/AllMemberProfile.js'
import PersonIcon from '@mui/icons-material/Person';

export default function MyProfile(props) {
    return (
        <Grid xs={12} sm={6} md={3} container item spacing={1}>
            <Grid item>
                <div style={{ width: 96, height: 96, backgroundColor: "white" }}>
                    {allMemberProfile[`${props.name}`].profileDirectory ?
                        <img style={{ width: '100%', height:'100%', objectFit: 'cover',zIndex: "-1", backgroundColor: "white" }} src={allMemberProfile[`${props.name}`].profileDirectory} />
                        :
                        <img style={{ width: 96, height: 96, backgroundColor: "white" }} src={require("../../utility/profile/pic/avatar.png")} />
                    }
                </div>
            </Grid>

            <Grid item xs container>
                <Grid item>
                    <Grid item container>
                        <Typography align="justify" style={{ wordBreak: 'break-all', fontWeight: 600 }}>
                            <MyLink href={allMemberProfile[`${props.name}`].nameLink}>
                                {allMemberProfile[`${props.name}`].nameDisplayed}
                            </MyLink>
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Typography >
                            {allMemberProfile[`${props.name}`].description}
                        </Typography>
                        {props.children}

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
