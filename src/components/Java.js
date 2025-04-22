import React, {useState} from 'react'
import img1 from '../images/java.jpeg'
import { Navigate } from 'react-router-dom'

export default function Java() {
  const [data, setData] = useState(false)
  if (data) {
      return <Navigate to='/contact' />
    }
  return (
    <div className='py-20 md:mx-36 mx-10'>
          <img src={img1} alt="Java" />
          <h1 className='pt-8 text-2xl'>Java Full Stack Development</h1>
          <div className=' flex flex-col md:flex md:flex-row bg-[#eee] md:w-[700PX] justify-center items-center p-8 rounded-lg mt-5'>
            <div className='px-5 md:border-r-2 border-gray-300'>
                <h1>Current Status</h1>
                <p className='border-2 bg-blue-600 w-28 px-2 py-1 rounded-full mt-5'>Not Enrolled</p>
            </div>
            <div className='md:px-16 md:border-r-2 border-gray-300 my-5'>
                <h1>Price</h1>
                <p className='text-2xl text-gray-600 font-semibold mt-5'>Closed</p>
            </div>
            <div className='pl-8'>
                <h1>Get Started</h1>
                <button className='border-2 px-3 py-2 bg-blue-700 rounded-full mt-5' onClick={() => setData(true)}>Take This Course</button>
            </div>
          </div>
          <p className='mt-4'>This course will teach you how to do full stack development with the help of Java.</p>
        </div>
  )
}
