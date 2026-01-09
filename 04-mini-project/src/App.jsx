import React from 'react'
import jobs from './data/jobs.json'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      {jobs.map(job => (
        <Card job={job} />
      ))}
    </div>
  )
}

export default App
