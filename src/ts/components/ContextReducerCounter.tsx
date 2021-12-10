import { VFC, useContext } from 'react'
import { Store } from '../context/CounterProvider'
const ContextReducerCounter: VFC = () => {
  const { globalCount, setGlobalCount } = useContext(Store)
  console.log(globalCount)
  return (
    <div className="flex flex-col text-xl mt-10 items-center">
      <div className="text-4xl">
        <h1>useContext + useReducer counter</h1>
      </div>
      <div className="mt-5">
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => setGlobalCount({ type: 'DECREMENT', payload: null })}
        >
          -
        </button>
        <span className="text-5xl">{globalCount.value}</span>
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => setGlobalCount({ type: 'INCREMENT', payload: null })}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ContextReducerCounter
