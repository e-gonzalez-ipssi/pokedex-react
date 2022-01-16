import React, { useState } from "react";
import { Dialog, DialogTitle, DialogActions, DialogContent, Button, TextField, Grid } from '@mui/material';
import { validateEmail } from "../helper/validateEmail";

export default function ContactDialog({ open, onClose }) {
    const [mail, setMail] = useState("");
    const [content, setContent] = useState("");
    const [color, setColor] = useState("primary");

    const handleClose = () => {
        onClose();
    };

    const handleSendMail = () => {
        console.log("mail : "+mail)
        console.log("content : "+content)
        // envoie un mail a l'adresse e-gonzalez@ecole-ipssi.net
        onClose();
    };
  
    const handleChangeMail = (e) => {
        // change color to error color until the email is a valide one
        if (!validateEmail(e.target.value)) {
            setColor("error")
        }
        if (validateEmail(e.target.value)) {
            setColor("primary")
        }
        setMail(e.target.value);
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Contact myself at e-gonzalez@ecole-ipssi.net</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField fullWidth color={color} id="mail" label="Your email adress" variant="outlined" onChange={handleChangeMail}/>
                    </Grid>
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField fullWidth color="primary" id="content" label="Content" variant="outlined" onChange={handleChangeContent}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                <Button variant="outlined" onClick={handleSendMail}>Send Mail</Button>
            </DialogActions>
        </Dialog>
    );
}