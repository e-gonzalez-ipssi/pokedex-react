import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEDEX } from '../api/pokemon';
import PokemonCard from '../composant/PokemonCard';
import PageTitle from '../composant/PageTitle';
import Loader from '../composant/Loader';
import { Grid, TextField } from '@mui/material';
import TypeFilter from '../composant/TypeFilter';

export default function PokedexFavoriteFiltered (props) {
    const { data, error, loading } = useQuery(GET_POKEDEX);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let search = urlParams.get('search');

        if (search !== null) {
            setFilter(search);
        }

        return () => {
        }
    }, [])

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
        const pokedex = data.species.filter(pokemon =>
            pokemon.name.includes(filter)
        );

        const favoritePokedex = pokedex.filter(pokemon =>
            localStorage.getItem(pokemon.id) === "true"
        );

        return (
            <div key="pokedex">
                <PageTitle title="Pokedex" />
                <Grid container>
                    <Grid item xs={3}>
                        <TextField id="filter" label="Filter" variant="outlined" onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={9}>
                        <TypeFilter/>
                    </Grid>
                </Grid>
                <Grid container>
                {
                    favoritePokedex.map(( pokemon, index ) => {
                        let types = pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes
                        return (
                            <Grid item key={index}>
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
