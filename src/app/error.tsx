'use client'
import React from 'react'
type ErrorProp={
    error:Error,
    reset:()=>void
}
function error({error,reset}:ErrorProp) {
  return (
    <div className='h-[100dvh] w-[100%] flex flex-col justify-center items-center'>
      <h1>{error.message}</h1>
      <button className='bg-orange-500 px-3 py-2 rounded' onClick={reset}>Try Again</button>
    </div>
  )
}

export default error
