import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App'
import './styles.css'

//first create root
const root = ReactDOM.createRoot(document.getElementById('root'))

//render the element with created root
root.render(<App />)
