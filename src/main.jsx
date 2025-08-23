import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import './assets/css/root.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)