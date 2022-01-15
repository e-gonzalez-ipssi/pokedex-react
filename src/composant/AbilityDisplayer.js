import React from "react";
import { Chip, Typography } from "@mui/material";

export default function AbilityDisplayer ({ abilities }) {
    return (
        <div>
            <Typography variant="h6">Abilities : </Typography>
            {
                abilities.map((ability, index) => {
                    return (
                        <Chip key={index} label={ability.pokemon_v2_ability.name} />
                    )
                })
            }
        </div>
    )
}