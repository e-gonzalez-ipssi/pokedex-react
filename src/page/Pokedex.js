import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEDEX } from '../api/pokemon';
import PokemonCard from '../composant/PokemonCard';
import PageTitle from '../composant/PageTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';

export default function Pokedex (props) {
    const { data, error, loading } = useQuery(GET_POKEDEX);

    if (error) {
        return (
            <div key="pokedex">
                <PageTitle title="ERROR - Pokedex can't load" />
            </div>
        )
    }

    if (loading) {
        return (
            <div key="pokedex">
                <CircularProgress />
            </div>
        )
    }

    if (data) {
        let pokedex = data.species;

        return (
            <div key="pokedex">
                <PageTitle title="Pokedex" />
                <Grid container>
                {
                    pokedex.map(( pokemon, index ) => {
                        let types = pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes
                        return (
                            <Grid item>
                                <PokemonCard key={index} name={pokemon.name} id={pokemon.id} types={types}/>
                            </Grid>
                        )
                    }) 
                }
                </Grid>
    
            </div>
        )
    }


}
