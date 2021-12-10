import { VFC, useState } from 'react'

const UseStateCounter: VFC = () => {
  const [count, setCount] = useState(0)
  const [usePrevCount, setUsePrevCount] = useState(0)
  const [noPrevCount, setNoPrevCount] = useState(0)
  const decrementCount = () => {
    setCount((prevCount) => (prevCount -= 1))
  }
  const incrementCount = () => {
    setCount((prevCount) => (prevCount += 1))
  }
  const usePrevDecrementCount = () => {
    setTimeout(() => setUsePrevCount((prevCount) => prevCount - 1), 3000)
  }
  const usePrevIncrementCount = () => {
    setTimeout(() => setUsePrevCount((prevCount) => prevCount + 1), 3000)
  }
  const noPrevDecrementCount = () => {
    setTimeout(() => setNoPrevCount(noPrevCount - 1), 3000)
  }
  const noPrevIncrementCount = () => {
    setTimeout(() => setNoPrevCount(noPrevCount + 1), 3000)
  }
  return (
    <div className="flex flex-col text-xl mt-10 items-center">
      <div className="text-4xl">
        <h1>useState counter</h1>
      </div>
      <div className="mt-5">
        <button className="text-5xl mx-5 px-5" onClick={() => decrementCount()}>
          -
        </button>
        <span className="text-5xl">{count}</span>
        <button className="text-5xl mx-5 px-5" onClick={() => incrementCount()}>
          +
        </button>
      </div>
      <div className="text-4xl mt-10">
        <h1>useState counter</h1>
      </div>
      <div className="text-4xl">
        <h1>(use prev count)</h1>
      </div>
      <div className="mt-5">
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => usePrevDecrementCount()}
        >
          -
        </button>
        <span className="text-5xl">{usePrevCount}</span>
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => usePrevIncrementCount()}
        >
          +
        </button>
      </div>
      <div className="text-4xl mt-10">
        <h1>useState counter</h1>
      </div>
      <div className="text-4xl">
        <h1>(not use prev count)</h1>
      </div>
      <div className="mt-5">
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => noPrevDecrementCount()}
        >
          -
        </button>
        <span className="text-5xl">{noPrevCount}</span>
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => noPrevIncrementCount()}
        >
          +
        </button>
      </div>
      <div className="flex flex-col items-center pt-10">
        <div>
          <h1>Source Code</h1>
        </div>
        <pre className="mt-5 px-10 py-10 text-sm text-gray-200 bg-black">
          {`
import { VFC, useState } from 'react'

const UseStateCounter: VFC = () => {
  const [count, setCount] = useState(0)
  const [usePrevCount, setUsePrevCount] = useState(0)
  const [noPrevCount, setNoPrevCount] = useState(0)
  const decrementCount = () => {
    setCount((prevCount) => (prevCount -= 1))
  }
  const incrementCount = () => {
    setCount((prevCount) => (prevCount += 1))
  }
  const usePrevDecrementCount = () => {
    setTimeout(() => setUsePrevCount((prevCount) => prevCount - 1), 3000)
  }
  const usePrevIncrementCount = () => {
    setTimeout(() => setUsePrevCount((prevCount) => prevCount + 1), 3000)
  }
  const noPrevDecrementCount = () => {
    setTimeout(() => setNoPrevCount(noPrevCount - 1), 3000)
  }
  const noPrevIncrementCount = () => {
    setTimeout(() => setNoPrevCount(noPrevCount + 1), 3000)
  }
  return (
    <div className="flex flex-col text-xl mt-10 items-center">
      <div className="text-4xl">
        <h1>useState counter</h1>
      </div>
      <div className="mt-5">
        <button className="text-5xl mx-5 px-5" onClick={() => decrementCount()}>
          -
        </button>
        <span className="text-5xl">{count}</span>
        <button className="text-5xl mx-5 px-5" onClick={() => incrementCount()}>
          +
        </button>
      </div>
      <div className="text-4xl mt-10">
        <h1>useState counter</h1>
      </div>
      <div className="text-4xl">
        <h1>(use prev count)</h1>
      </div>
      <div className="mt-5">
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => usePrevDecrementCount()}
        >
          -
        </button>
        <span className="text-5xl">{usePrevCount}</span>
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => usePrevIncrementCount()}
        >
          +
        </button>
      </div>
      <div className="text-4xl mt-10">
        <h1>useState counter</h1>
      </div>
      <div className="text-4xl">
        <h1>(not use prev count)</h1>
      </div>
      <div className="mt-5">
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => noPrevDecrementCount()}
        >
          -
        </button>
        <span className="text-5xl">{noPrevCount}</span>
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => noPrevIncrementCount()}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default UseStateCounter
`}
        </pre>
      </div>
    </div>
  )
}

export default UseStateCounter
