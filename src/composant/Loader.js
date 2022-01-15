import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader (props) {
    return (
        <div key="loader" style={{display: 'flex', justifyContent: 'center', pt: 10}}>
            <CircularProgress />
        </div>
    )
}