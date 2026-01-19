import React from 'react'
import Header from './components/header/header.jsx'
import Content from './components/left-content/content.jsx'
import Card from './components/cards/card.jsx'
import data from './data/info.json'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-400 overflow-auto'>
      <Header />
      <div className='flex my-20 '>
        <Content />
        <div className='flex wrap gap-10'>
          {data.map((item) => (
            <Card obj={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
