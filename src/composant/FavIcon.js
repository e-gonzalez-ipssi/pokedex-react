import React from "react";
import { useState } from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

export default function FavIcon ({ id }) {
    const [isFavoris, setIsFavoris] = useState(false);

    let favIcon = <StarOutlineIcon fontSize="large"/>

    if(isFavoris) {
        favIcon = <StarIcon  fontSize="large"/>
    }

    return (
        <div key={id}>
            {favIcon}
        </div>
    )
}