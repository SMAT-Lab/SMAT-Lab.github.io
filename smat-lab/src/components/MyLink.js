import React from 'react'
import Link from '@mui/material/Link';

export default function Footer(props) {
    return (
        <Link href={props.href} underline="none" style={{color: !props.href&&'black'}}>{props.children}</Link>
    )
}
