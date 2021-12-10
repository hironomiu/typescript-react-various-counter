import { VFC } from 'react'
import { Link } from 'react-router-dom'

const Header: VFC = () => {
  return (
    <>
      <Link className="mx-2" to="/">
        Home
      </Link>
      <Link className="mx-2" to="/usestate">
        useState
      </Link>
      <Link className="mx-2" to="/redux-toolkit">
        redux-toolkit
      </Link>
      <Link className="mx-2" to="/context-reducer">
        context-reducer
      </Link>
    </>
  )
}

export default Header
