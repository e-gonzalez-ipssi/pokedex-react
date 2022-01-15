import React from "react";
import { Chip, Typography } from "@mui/material";

export default function MoveDisplayer ({ moves }) {
    return (
        <div>
            <Typography variant="h6">Moves : </Typography>
            {
                moves.map((move, index) => {
                    return (
                        <Chip key={index} label={move.pokemon_v2_move.name} />
                    )
                })
            }
        </div>
    )
}
