import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#fafafa", marginTop: "40px", padding: "10px 0" }}>
            <div >
                <Typography align="center" style={{height: "20px"}}>
                    SMAT Lab @ MONASH
                </Typography>
            </div>
        </footer>
    )
}
