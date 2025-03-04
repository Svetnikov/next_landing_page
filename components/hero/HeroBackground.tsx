import React from 'react'

export const HeroBackground = () => {
  return (
    <div className='relative w-full h-screen'>
        <video src="/video2.mp4" autoPlay loop muted
        className='w-full h-full object-cover bg-center bg-cover'></video>
        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center flex-col justify-center'>
          
            <div className="text-white text-5xl text-center mb-5">Disfruta de la mejor TV, al mejor precio.</div>
            <div className="text-white text-3xl">Por tan solo 8$/mes.</div>
            <input type="button" value="Me interesa!" />
          
        </div>
    </div>
  )
}
