import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import './app.css'
import CounterProvider from './context/CounterProvider'
import { BrowserRouter } from 'react-router-dom'

const app = document.getElementById('app')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </CounterProvider>
    </Provider>
  </React.StrictMode>,
  app
)
