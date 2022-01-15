import React from 'react';
import PageTitle from '../composant/PageTitle';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../api/pokemon';
import Loader from '../composant/Loader';
import { Typography } from '@mui/material';
import { colorTypeGradients } from '../helper/color';
import { Grid } from "@mui/material";
import TypeIcons from '../composant/TypeIcons';
import StatDisplayer from '../composant/StatsContainer';
import AbilityDisplayer from '../composant/AbilityDisplayer';
import MoveDisplayer from '../composant/MoveDisplayer';
import FavIcon from '../composant/FavIcon';


export default function Pokemon (props) {
    const params = useParams();

    const { data, error, loading } = useQuery(GET_POKEMON, {variables: { pokemon: params.name }});

    if (error) {
        return (
            <div key="pokedex">
                <PageTitle title="ERROR - Pokemon can't load" />
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
        const pokemon = data.pokemon_v2_pokemon[0];

        const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon.id+".png";

        let typesClean = []

        pokemon.pokemon_v2_pokemontypes.forEach(type => {
            typesClean.push(type.pokemon_v2_type.name)
        });
    
        let finalColor;
    
        if (typesClean.length === 2) {
            finalColor = colorTypeGradients(typesClean[0], typesClean[1], typesClean.length);
        } else {
            finalColor = colorTypeGradients(typesClean[0], typesClean[0], typesClean.length);
        }
        
        return (
            <div key="pokemon" style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`, width: 500, margin: "5%" }}>
                <Grid container>
                    <Grid item xs={11}>
                        <PageTitle title={pokemon.name+" #"+pokemon.pokemon_species_id} />
                    </Grid>
                    <Grid item xs={1}>
                        <FavIcon id={pokemon.pokemon_species_id} />
                    </Grid>
                </Grid>
                
                
                <img src={img} alt={pokemon.name} height="500"/>

                <TypeIcons types={typesClean}/>
                <Typography variant="h6">
                    height: {pokemon.height/10} m
                </Typography>
                <Typography variant="h6">
                    weight: {pokemon.weight/10} kg
                </Typography>

                <StatDisplayer 
                    pv={pokemon.pokemon_v2_pokemonstats[0].base_stat} 
                    atk={pokemon.pokemon_v2_pokemonstats[1].base_stat} 
                    def={pokemon.pokemon_v2_pokemonstats[2].base_stat} 
                    atkspe={pokemon.pokemon_v2_pokemonstats[3].base_stat} 
                    defspe={pokemon.pokemon_v2_pokemonstats[4].base_stat} 
                    spe={pokemon.pokemon_v2_pokemonstats[5].base_stat} 
                />

                <AbilityDisplayer abilities={pokemon.pokemon_v2_pokemonabilities}/>

                <MoveDisplayer moves={pokemon.pokemon_v2_pokemonmoves} />
            </div>
        )
    }
}
