import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEDEX_BY_TYPE } from '../api/pokemon';
import PokemonCard from '../composant/PokemonCard';
import PageTitle from '../composant/PageTitle';
import Loader from '../composant/Loader';
import { Grid, TextField } from '@mui/material';
import TypeFilter from '../composant/TypeFilter';

export default function PokedexTypeFiltered (props) {
    const params = useParams();

    const { data, error, loading } = useQuery(GET_POKEDEX_BY_TYPE, { variables: { type: params.type }});
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
        const pokedex = data.pokemon_v2_pokemontype.filter(pokemon =>
            pokemon.pokemon_v2_pokemon.name.includes(filter)
        );

        return (
            <div key="pokedex">
                <PageTitle title={"Pokedex "+ params.type } />
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
                    pokedex.map(( pokemon, index ) => {
                        let types = pokemon.pokemon_v2_pokemon.pokemon_v2_pokemontypes
                        return (
                            <Grid item key={index}>
                                <PokemonCard key={index} name={pokemon.pokemon_v2_pokemon.name} id={pokemon.pokemon_v2_pokemon.id} types={types}/>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </div>
        )
    }
}
