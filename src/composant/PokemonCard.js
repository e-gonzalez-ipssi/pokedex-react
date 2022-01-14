import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import PokemonCardButton from './PokemonCardButton'
import { Paper } from '@mui/material';

export default function PokemonCard ({ name, id }) {
    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png";
    
    return (
        <Paper elevation={10} sx={{ m: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
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
            </Card>
        </Paper>
    )
}