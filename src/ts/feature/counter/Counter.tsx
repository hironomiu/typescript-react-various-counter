import { VFC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlice'

const Counter: VFC = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  useEffect(() => {}, [])

  return (
    <div className="flex flex-col text-xl mt-10 items-center">
      <div className="text-4xl">
        <h1>Redux Toolkit counter</h1>
      </div>
      <div className="mt-5">
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-5xl">{count}</span>
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
