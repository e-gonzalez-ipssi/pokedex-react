import React from "react";
import { colorTypeGradients } from '../helper/color';
import { Grid, Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function TypeFilter (props) {
    const types = [
        "normal",
        "fire",
        "grass",
        "poison",
        "water",
        "electric",
        "ice",
        "fighting",
        "ground",
        "flying",
        "psychic",
        "dark",
        "ghost",
        "bug",
        "rock",
        "dragon",
        "steel",
        "fairy"
    ];

    const urlParams = new URLSearchParams(window.location.search);
    let search = urlParams.get('search');

    return (
        <div key="typeFilter">
            <Grid container>
                <Grid item xs={6}>
                    <NavLink
                        to="/pokedex"
                    >
                        <Avatar key={0} alt={"all"} sx={{ bgcolor: '#000000', border: 1, boxShadow: 10}}>All</Avatar>
                    </NavLink>
                </Grid>
                <Grid item xs={6}>
                    <NavLink
                        to="/pokedex/favorite"
                    >
                        <Avatar key={0} alt={"favorite"} sx={{ bgcolor: '#000000', border: 1, boxShadow: 10}}>Fav</Avatar>
                    </NavLink>
                </Grid>
                {
                    types.map((type, index) => {
                        return (
                            <Grid item xs={2} key={index}>
                                <NavLink
                                    to={"/pokedex/"+type+"?search="+search}
                                >
                                    <Avatar key={1} alt={type} src={"/"+type+".png"} sx={{ bgcolor: colorTypeGradients(type), border: 1, boxShadow: 10}} />
                                </NavLink>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}