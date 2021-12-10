import { VFC } from 'react'
import Counter from '../feature/counter/Counter'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './Home'
import UseStateCounter from './UseStateCounter'
import ContextReducerCounter from './ContextReducerCounter'
import Header from './Header'
import Footer from './Footer'

const Layout: VFC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)
  console.log(navigate.length)

  return (
    <div className="flex flex-col min-h-screen items-center mt-3">
      <div>
        <Header />
      </div>

      <div className="flex flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usestate" element={<UseStateCounter />} />
          <Route path="/redux-toolkit" element={<Counter />} />
          <Route path="/context-reducer" element={<ContextReducerCounter />} />
        </Routes>
      </div>
      <div className="mt-2 mb-4">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
Layout
