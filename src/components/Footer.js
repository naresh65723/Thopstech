import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'

export default function Footer() {
  const [data, setData] = useState(false)
    if (data) {
      return <Navigate to='/courses' />
    }
  return (
    <div>
      <div className='text-center bg-[#1884cb] p-24 border-b-2 border-white '>
        <h1 className='text-4xl mb-9'>Join Our 10K+ Happy Students​ Today!</h1>
        <button className='border-2 bg-white py-2 px-6 text-blue-500 rounded-full' onClick={() => setData(true)}>Start Learning</button>
      </div>
      <div className='text-center bg-[#1884cb] p-10' >
        <p>Copyright © 2025 Thops Tech</p>
      </div>
    </div>
  )
}
