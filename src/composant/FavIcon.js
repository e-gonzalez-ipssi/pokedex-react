import React from "react";
import { useState, useEffect } from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { Button } from "@mui/material";

export default function FavIcon ({ id }) {
    const [isFavoris, setIsFavoris] = useState(false);

    useEffect(() => {
        if(localStorage.getItem(id) === "true"){
            setIsFavoris(true)
        }
        return () => {}
    }, [id])

    const handleClick = () => {
        localStorage.setItem(id, !isFavoris);
        setIsFavoris(!isFavoris);
    }

    let favIcon = <StarOutlineIcon fontSize="large"/>

    if(isFavoris) {
        favIcon = <StarIcon  fontSize="large"/>
    }

    return (
        <div key={id}>
            <Button color="inherit" onClick={handleClick}>{favIcon}</Button> 
        </div>
    )
}