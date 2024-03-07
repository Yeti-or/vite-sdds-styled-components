import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createGlobalStyle } from 'styled-components';


import { sdds_serv__light } from '@salutejs/sdds-themes';

const Theme = createGlobalStyle(sdds_serv__light)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme />
    <App />
  </React.StrictMode>,
)
