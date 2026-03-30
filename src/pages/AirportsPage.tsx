import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Typography, Button, Box } from '@mui/material'
import AddAirportModal from '../components/AddAirportModal'

interface Airport {
    id: number
    name: string
    code: string
    city: string
    country: string
}

function AirportsPage() {
    const [airports, setAirports] = useState<Airport[]>([])
    const [modalOpen, setModalOpen] = useState(false)

    const fetchAirports = () => {
        axios.get('http://localhost:8081/api/airports')
            .then(res => setAirports(res.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchAirports()
    }, [])

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" fontWeight="bold">
                    ✈️ Airports
                </Typography>
                <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
                    Add Airport
                </Button>
            </Box>

            {airports.map(airport => (
                <Box key={airport.id} sx={{
                    background: 'white',
                    borderRadius: 2,
                    p: 2,
                    mb: 2,
                    boxShadow: 1
                }}>
                    <Typography variant="h6">{airport.name}</Typography>
                    <Typography color="text.secondary">
                        {airport.code} — {airport.city}, {airport.country}
                    </Typography>
                </Box>
            ))}

            {airports.length === 0 && (
                <Typography color="text.secondary" textAlign="center" mt={4}>
                    No airports yet. Add one!
                </Typography>
            )}

            <AddAirportModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onAirportAdded={fetchAirports}
            />
        </Container>
    )
}

export default AirportsPage