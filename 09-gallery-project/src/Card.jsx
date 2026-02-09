import React from 'react'

const Card = ({user}) => {
  return (
    <div>
        <a href={user.url} target='_blank'>
            <div className="h-60 w-60 overflow-hidden rounded-xl">
                <img src={user.download_url} alt={user.author} className='h-full w-full object-cover lazy' />
            </div>
            <h1 className='text-white font-bold text-md'>{user.author}</h1>
        </a>
    </div>
  )
}

export default Card
