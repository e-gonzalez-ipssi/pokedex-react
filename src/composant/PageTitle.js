import React from 'react';
import { Typography } from '@mui/material'

export default function PageTitle ({ title }) {

    return (
        <div key="page_title">
            <Typography variant="h1">{title}</Typography>
        </div>
    )
}