import React from 'react';
import dotenv from 'dotenv'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
const key = import.meta.env.VITE_LICENSE_KEY

import { registerLicense } from '@syncfusion/ej2/base.js';
registerLicense(key)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
