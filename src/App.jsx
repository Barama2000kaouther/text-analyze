import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compenent/header.jsx'
import {Section1} from './compenent/section_text_aria.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mx-[15vw] max-md:mx-[5vw]">
        <Header />
       
      </div>

    </>
  )
}

export default App
