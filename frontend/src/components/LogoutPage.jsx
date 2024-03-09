import React from 'react'
import { Link } from 'react-router-dom'

function LogoutPage() {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
    <h1 className='text-[#F3A847] font-logo text-[100px] '>Thank you for Visiting</h1>
    <div>
        <h2 className='text-white text-lg'>Login Again? <Link className='text-[#F3A847]' to={'/'}>Click here</Link></h2>
    </div>
    </div>
  )
}

export default LogoutPage