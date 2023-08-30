import React from 'react'

type Props = {}

const Landing = (props: Props) => {
  return (
<div className='h-[300px] w-[100%] bg-gradient-to-r from-blue-500 to-purple-600 text-center flex flex-col justify-center items-center text-white'>
    <p className='text-4xl md:text-6xl font-extrabold'>
        <span className="text-yellow-300">Get Your</span> Relatives Together with Invitations
    </p>
    <p className='text-2xl md:text-3xl mt-5 text-gray-300'>
        Create memorable events and share beautiful invitations with your loved ones.
    </p>
</div>

  )
}
export default Landing