import React, {useEffect} from "react";
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import PageWrapper from '../components/PageWrapper';
import MyLink from '../components/MyLink';




export default function News(props) {
    useEffect(() => {
        document.title = "SMAT Lab - News"
    }, [])
    
    return (
        <PageWrapper showDivider={true} title="News of Our Group">
            
                <Timeline position='right' style={{ padding: "0", borderRadius: "0px" }}>
                    <MyTimelineItem yearLabel="2021" />
                    <MyTimelineItem dateTime="SEP. 25, 2021">
                        Our work on assesing Android third-party library detection tools has been accepted to (<MyLink href="/news">TSE</MyLink>).
                    </MyTimelineItem>
                    <MyTimelineItem dateTime="SEP. 26, 2021">
                        Our work on assesing Android third-party library detection tools has been accepted to (<MyLink href="/news">TSE</MyLink>).
                    </MyTimelineItem>
                    <MyTimelineItem yearLabel="2020" />
                    <MyTimelineItem dateTime="SEP. 27, 2020">
                        Our work on assesing Android third-party library detection tools has been accepted to (<MyLink href="/news">TSE</MyLink>).
                    </MyTimelineItem>                
                </Timeline>
        </PageWrapper>
    );

}


function MyTimelineItem(props) {

    return (
        <TimelineItem style={{ minHeight: '50px' }}>
            <TimelineOppositeContent style={{ flex: 0, padding: 0, }} />
            <TimelineSeparator>
                {props.yearLabel ?
                    <Typography style={{ backgroundColor: "green", padding: "4px", borderRadius: "3px", color: "white", width: "36px" }}>{props.yearLabel}</Typography>
                    :
                    <Grid container alignItems="center" justifyContent="center" style={{ backgroundColor: "", width: "44px", padding: "0", margin: 0 }} >
                        <div style={{ padding: "8px", backgroundColor: "grey", borderRadius: "50%" }}></div>
                    </Grid>
                }

                <TimelineConnector />

            </TimelineSeparator>
            <TimelineContent style={{paddingBottom:"30px"}}>
                {!props.yearLabel &&
                    <>
                        <Typography  component="span" style={{ fontSize: "14px", fontWeight:800}}>
                            {props.dateTime}
                        </Typography>
                        <Typography align="justify" style={{wordBreak: 'break-all'}}>
                            {props.children}
                        </Typography>
                    </>
                }
            </TimelineContent>
        </TimelineItem>
    );
}

