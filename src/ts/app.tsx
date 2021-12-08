import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Home from './components/Home'
import './app.css'
import CounterProvider from './context/CounterProvider'

const app = document.getElementById('app')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <Home />
      </CounterProvider>
    </Provider>
  </React.StrictMode>,
  app
)
