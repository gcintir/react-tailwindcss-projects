import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import DigitalClock from './components/DigitalClock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DigitalClock />
  </StrictMode>,
)
