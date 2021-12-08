import { VFC } from 'react'
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'
const Home: VFC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center">
        <Layout />
      </div>
    </BrowserRouter>
  )
}

export default Home
