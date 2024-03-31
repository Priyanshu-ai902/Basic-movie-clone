import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componenets/Navbar'
import Slider from './Componenets/Slider'
import Productionhouse from './Componenets/Productionhouse'
import General from './Componenets/General'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Navbar />
        <Slider />
        <Productionhouse />
        <General />
      </div>
    </>
  )
}

export default App
