import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingItem1 from './loader/item-1'
import LoadingItem2 from './loader/item-2'
import LoadingItem3 from './loader/item-3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <LoadingItem1 />
      <LoadingItem2 />
      <LoadingItem3 />
    </>
  )
}

export default App
