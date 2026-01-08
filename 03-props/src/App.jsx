import React from 'react'
import Card from './components/Card'
import myImage from './assets/react.svg'
import anotherImg from '../public/vite.svg'

const App = () => {
  return (
    <div className='app'>
      <Card  name="Devansh" age={20} image={myImage} description="Lorem ipsum dolor sit amet consectetur" />
      <Card  name="Mitul" age={22} image={anotherImg} description="Lorem ipsum dolor sit amet consectetur" />
      <Card  name="Mitul" age={22} image={anotherImg} description="Lorem ipsum dolor sit amet consectetur" />
    </div>
  )
}

export default App
