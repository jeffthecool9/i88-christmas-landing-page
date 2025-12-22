import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Check if this path is correct
import './index.css'   // Make sure this file exists in src or remove this line

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
