import React from 'react'

function PrototypeImg() {
  return (
    <div className='flex-col justify-center items-center mx-auto relative hidden lg:block'>
        <img src="/linear-bg.svg" className='absolute inset-0 z-10 bg-transparent top+[200px]' alt="" />
        <img src="/1500x500.png" className='max-w-[1000px] z-0 relative mt-20 top-[200px]' alt="" />
    </div>
  )
}

export default PrototypeImg