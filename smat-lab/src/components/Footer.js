import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    return (
        <footer style={{ height: "140px", backgroundColor: "#fafafa", marginTop: "40px", paddingTop: "58px" }}>
            <div >
                <Typography align="center">
                    Copyright © 2019 - 2021 Software Analysis and Trustworthy Computing Lab @ MONASH
                </Typography>
                <Typography align="center">
                    Updated at Dec. 26, 2021, 23:05:58 ACST
                </Typography>
            </div>
        </footer>
    )
}
