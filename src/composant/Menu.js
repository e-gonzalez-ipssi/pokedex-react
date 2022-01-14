import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PokeballIcon from '@mui/icons-material/CatchingPokemon';
import BallotIcon from '@mui/icons-material/Ballot';

const menuItem = [
    { name: "Home", to: "/", icon:<PokeballIcon/> },
    { name: "Pokedex", to: "/pokedex", icon:<BallotIcon/> }
]


export default function Menu ( props ) {
    return (
        <div key="menu">
            <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
            >
                    {menuItem.map((item) => (
                    <SpeedDialAction
                        key={item.name}
                        icon={item.icon}
                        tooltipTitle={item.name}
                        onClick={() => window.location.replace(item.to)}
                    />
                    ))}
            </SpeedDial>
        </div>
    )
}
