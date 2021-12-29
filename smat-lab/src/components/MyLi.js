import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function MyLi(props) {
    return (
        <li style={{ paddingBottom: '5px' }}>
            <Typography align="justify" style={{ wordBreak: 'break-all' }}>
                {props.children}
            </Typography>
        </li>
    )
}