import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Layout/Layout.css'
import './components/AppBar/AppBar.css'
import './components/Herro/Herro.css'
import './components/Footer/Footer.css'
import './components/ButtonRegister/ButtonRegister.css'
import './components/ButtonLogin/ButtonLogin.css'
import './components/Features/Features.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)

// basename = "/app-return-pack"