import React from 'react'
import { Link } from 'react-router-dom'

const Root = () => {
  return (
    <div className="flex flex-col mt-10 text-xl">
      <Link className="my-2" to="/usestate">
        useState
      </Link>
      <Link className="my-2" to="/redux-toolkit">
        redux toolkit
      </Link>
      <Link className="my-2" to="/context-reducer">
        useContext + useReducer
      </Link>
    </div>
  )
}

export default Root
Root
