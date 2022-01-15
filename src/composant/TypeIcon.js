import React from "react";
import { Grid, Avatar } from "@mui/material";
import { colorTypeGradients } from '../helper/color';

export default function TypeIcons ({ types }) {
    let finalColor;
    
    if (types.length === 2) {
        finalColor = colorTypeGradients(types[0], types[1], types.length);
    } else {
        finalColor = colorTypeGradients(types[0], types[0], types.length);
    }

    return (
        <div key="types">
            <Grid container>
                {
                    types.map((type, index) => {
                        return (
                            <Grid item xs={6} sx={{}} key={index}>
                                <Avatar key={index} alt={type} src={"/"+type+".png"} sx={{ bgcolor: finalColor[index], border: 1, boxShadow: 10}} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}