import React from 'react';
import PageTitle from '../composant/PageTitle';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../api/pokemon';
import CircularProgress from '@mui/material/CircularProgress';


export default function Pokemon (props) {
    const name = useParams();

    const { data, error, loading } = useQuery(GET_POKEMON, {variables: { pokemon: name.name}});

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
                <CircularProgress />
            </div>
        )
    }

    if (data) {
        console.log(data);

        return (
            <div key="pokemon">
                <PageTitle title={name.name} />
            </div>
        )
    }


}
