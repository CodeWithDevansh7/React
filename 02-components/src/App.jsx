import React from 'react'
import NameCard from './components/NameCard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      // you can use multiple times
      <NameCard /> 
      <NameCard />
      <Navbar />
    </div>
  )
}

export default App