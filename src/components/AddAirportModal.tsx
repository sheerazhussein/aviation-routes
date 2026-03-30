import { useState } from 'react'
import axios from 'axios'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Box
} from '@mui/material'

interface Props {
    open: boolean
    onClose: () => void
    onAirportAdded: () => void
}

function AddAirportModal({ open, onClose, onAirportAdded }: Props) {
    const [form, setForm] = useState({
        name: '',
        code: '',
        city: '',
        country: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8081/api/airports', form)
            .then(() => {
                onAirportAdded()
                onClose()
                setForm({ name: '', code: '', city: '', country: '' })
            })
            .catch(err => console.error(err))
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Add New Airport</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2} mt={1}>
                    <TextField
                        label="Airport Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="IATA Code"
                        name="code"
                        value={form.code}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="City"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="inherit">Cancel</Button>
                <Button onClick={handleSubmit} variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddAirportModal