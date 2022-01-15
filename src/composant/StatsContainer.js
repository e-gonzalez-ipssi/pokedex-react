import { Grid } from "@mui/material";
import React from "react";

export default function StatDisplayer ({ pv, atk, def, atkspe, defspe, spe}) {
    return (
        <div key="stats">
            <Grid container sx={{ mt: 2, ml: 2, mr: 2, mb: 2 }}>
                <Grid item xs={4}>PV {pv}</Grid>
                <Grid item xs={4}>Atk {atk}</Grid>
                <Grid item xs={4}>Def {def}</Grid>
                <Grid item xs={4}>Atk Spe {atkspe}</Grid>
                <Grid item xs={4}>Def Spe {defspe}</Grid>
                <Grid item xs={4}>Speed {spe}</Grid>
            </Grid>
        </div>
    )
}