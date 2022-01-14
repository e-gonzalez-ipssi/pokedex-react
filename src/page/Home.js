import React from 'react';
import PageTitle from '../composant/PageTitle';
import { Typography } from '@mui/material'

export default function Home (props) {
    return (
        <div key="home">
            <PageTitle title="Esteban Gonzalez - React Exam" />
            <Typography variant="h1">Esteban Gonzalez - React Exam</Typography>
        </div>
    )
}
