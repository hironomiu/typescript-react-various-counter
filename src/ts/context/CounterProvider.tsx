import React, { createContext, useReducer } from 'react'

type State = {
  value: number
}

type ACTION_TYPE = {
  type: 'DECREMENT' | 'INCREMENT'
}

type SetGlobalCount = ACTION_TYPE & {
  payload: null | string
}

type Props = {
  children: React.ReactNode
}

const initialState: State = {
  value: 0,
}

const counter = (state: State, action: ACTION_TYPE) => {
  switch (action.type) {
    case 'DECREMENT': {
      const decrementValue = state.value - 1
      return { value: decrementValue }
    }
    case 'INCREMENT': {
      const incrementValue = state.value + 1
      return { value: incrementValue }
    }
    default:
      return state
  }
}

export const Store = createContext(
  {} as {
    globalCount: State
    setGlobalCount: React.Dispatch<SetGlobalCount>
  }
)

const CounterProvider: React.FC<Props> = ({ children }) => {
  const [globalCount, setGlobalCount] = useReducer(counter, initialState)
  return (
    <Store.Provider value={{ globalCount, setGlobalCount }}>
      {children}
    </Store.Provider>
  )
}

export default CounterProvider
