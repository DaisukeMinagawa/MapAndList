import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MapAndList from './MapAndList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MapAndList />
    </div>
  )
}

export default App
