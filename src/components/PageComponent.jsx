import React from 'react'

export default function PageComponent({ title, buttons ='', children }) {
  return (
    <>
    <header className='bg-white shadow'>
        <div className='flex justify-between items-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:ppx-8'>
    <h1 className='text-3xl font-bold tracking-tight text-grey-900'>
        {title}

    </h1>
    </div>
    </header>
    
    </>
  )
}
