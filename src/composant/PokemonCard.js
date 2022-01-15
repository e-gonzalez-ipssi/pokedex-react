import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import PokemonCardButton from './PokemonCardButton'
import { CardContent, Paper, Avatar, Grid } from '@mui/material';
import { colorTypeGradients } from '../helper/color';

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
            <Card sx={{ maxWidth: 345, border: 1 }} style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` }}>
                <CardHeader 
                    action={
                        <PokemonCardButton name={name}/>
                    }
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Grid container>
                    {
                        typesClean.map((type, index) => {
                            return (
                                <Grid item xs={6} sx={{}}>
                                    <Avatar key={index} alt={type} src={"/"+type+".png"} sx={{ bgcolor: finalColor[index], border: 1, boxShadow: 10}} />
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </CardContent>
            </Card>
        </Paper>
    )
}