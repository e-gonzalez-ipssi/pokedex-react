import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import PokemonCardButton from './PokemonCardButton'
import { CardContent, Paper } from '@mui/material';
import { colorTypeGradients } from '../helper/color';
import TypeIcons from './TypeIcons';
import FavIcon from './FavIcon';

// c'est toute cette partit la qui ralentit l'affichage a mort mais tant pis, c'est a peut pret jolie une fois a l'écran
// m'en tenez pas trop rigueur j'ai tenter des trucs que je fais pas trop d'habitude
// et si vous avez des idées pour accelerer le proccessus je vous invites a faire une pull request ou renvoyer un mail :^)
export default function PokemonCard ({ name, id, types }) {
    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png";

    let typesClean = []

    types.forEach(type => {
        typesClean.push(type.pokemon_v2_type.name)
    });

    let finalColor;

    if (typesClean.length === 2) {
        finalColor = colorTypeGradients(typesClean[0], typesClean[1], typesClean.length);
    } else {
        finalColor = colorTypeGradients(typesClean[0], typesClean[0], typesClean.length);
    }

    return (
        <Paper elevation={10} sx={{ m: 1 }}>
            <Card sx={{ maxWidth: 370, border: 1 }} style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` }}>
                <CardHeader 
                    action={
                        <Grid container>
                            <Grid item xs={10}>
                                <PokemonCardButton name={name}/>
                            </Grid>
                            <Grid item xs={2}>
                                <FavIcon id={id} />
                            </Grid>
                        </Grid>
                    }
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <TypeIcons types={typesClean}/>
                </CardContent>
            </Card>
        </Paper>
    )
}
