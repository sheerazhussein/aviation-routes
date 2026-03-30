import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AirportsPage from './pages/AirportsPage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AirportsPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App