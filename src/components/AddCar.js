import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function AddCar(props) {

    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        year: '',
        price: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }

    const handleChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    }

    const handleSave = () => {
        props.addCar(car);
        handleClickClose();
    }

    return (
        <div>
            <Button variant='contained' onClick={handleClickOpen}>New car</Button>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <Stack>
                        <TextField label="Brand" name="brand" autoFocus variant='standard' value={car.brand} onChange={handleChange} />
                        <TextField label="Model" name="model" autoFocus variant='standard' value={car.model} onChange={handleChange} />
                        <TextField label="Color" name="color" autoFocus variant='standard' value={car.color} onChange={handleChange} />
                        <TextField label="Year" name="yearOfProduction" autoFocus variant='standard' value={car.year} onChange={handleChange} />
                        <TextField label="Price" name="price" autoFocus variant='standard' value={car.price} onChange={handleChange} />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCar;