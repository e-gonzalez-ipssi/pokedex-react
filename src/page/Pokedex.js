import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEDEX } from '../api/pokemon';
import PokemonCard from '../composant/PokemonCard';
import PageTitle from '../composant/PageTitle';
import Loader from '../composant/Loader';
import { Grid, TextField } from '@mui/material';

export default function Pokedex (props) {
    const { data, error, loading } = useQuery(GET_POKEDEX);
    const [research, setResearch] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let search = urlParams.get('search');

        if (search !== "") {
            setFilter(search);
        }

        return () => {
        }
    }, [research])

    useEffect(() => {
        window.history.pushState({}, null, "?search="+ filter)
        return () => {
        }
    }, [filter])

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

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
                <Loader />
            </div>
        )
    }

    if (data) {
        const pokedex = data.species.filter((pokemon) => {
            if (pokemon.name.includes(filter)) {
                return pokemon
            }
        })
            

        return (
            <div key="pokedex">
                <PageTitle title="Pokedex" />
                <TextField id="filter" label="Filter" variant="outlined" default={filter} onChange={handleChange}/>
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
