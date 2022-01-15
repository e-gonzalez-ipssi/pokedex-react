import React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

export default function PokemonCardButton ({ name }) {
    const onClick = () => {
        const lowerCasedName = name.toLowerCase();
        window.location.replace("/pokemon/"+lowerCasedName);
    }
    
    return (
        <Button variant="outlined" startIcon={<ArrowForwardIos/>} onClick={onClick}>{name}</Button>
    )
}
