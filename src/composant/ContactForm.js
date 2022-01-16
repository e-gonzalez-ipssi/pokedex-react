import React from "react";
import { Button } from '@mui/material';
import ContactDialog from "./ContactDialog";

export default function ContactForm (props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div key="contact">
            <Button onClick={handleClickOpen} variant="outlined">Contact</Button>
            <ContactDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    )
}