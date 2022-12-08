// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext([0, ()=>{}])

function CountProvider(props) {
  const [ count, setCount ] = React.useState( 0 );
  const value = [count, setCount]
  return <CountContext.Provider value={value} {...props}/>
}

const useCount = () => {
  const context = React.useContext(CountContext)
  if (!context) throw new Error('useCount must be rendered in CountProvider')
  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [_, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
