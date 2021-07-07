import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from './routes/AppRouter'
import 'normalize.css/normalize.css'
import './styles/style.scss'



ReactDom.render(<AppRouter/>, document.getElementById("app"))