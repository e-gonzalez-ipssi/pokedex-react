import React from 'react';
import PageTitle from '../composant/PageTitle';
import { Paper, Typography, Link } from '@mui/material'
export default function Home (props) {
    return (
        <div key="home">
            <Paper elevation={3}>
                <PageTitle title="Esteban Gonzalez - React Exam" />

                <Typography variant="body1">
                    Ceci est le site vitrine pokémon montrant l'aquisition des compétences en React.
                </Typography>
                <Typography variant="body1">
                    Vous pourrez retrouver sur ce site l'affichage d'un pokedex ainsi que des infos concernants chaque pokémon grâce a l'api 
                    <Link href="https://pokeapi.co/">PokeApi</Link>.
                </Typography>
                <Typography variant="body1">
                    Les call api ont été réaliser via l'api en graphql grâce au client
                    <Link href="https://www.apollographql.com/">Apollo</Link>.
                </Typography>
            </Paper>
        </div>
    )
}
