import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import imgp from "../images/python.jpg"
import imgj from '../images/java.jpeg'
import Footer from './Footer'


function All() {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    if (show) {
        return <Navigate to='/python' />
    }
    if (show1) {
        return <Navigate to='/java' />
    }
  return (
    <div className='bg-[#eee]'>
        <div className='bg-[#1884cb] text-center p-20 text-white'>
            <h1 className='text-4xl font-bold'>All Courses</h1>
            <p className='mt-6'>To push your career forward, you will need to pursue in-demand skills to</p>
            <p>expand your knowledge and capabilities and set yourself apart from other</p>
            <p>candidates.</p>
        </div>
        <div className='md:flex flex flex-col md:flex-row gap-8 mt-20 text-center px-32 py-32'>
            <div className='border-2 bg-white pb-2'>
                <img src={imgp} alt="Python" />
                <p className='font-bold text-2xl'>Python Full Stack Development</p>
                <button className='border-2 py-1 px-12 md:px-36 bg-blue-800 rounded-lg' onClick={() => setShow(true)}>Enroll Now</button>
            </div>
            <div className='border-2 bg-white pb-2'>
                <img src={imgj} alt="java" />
                <p className='font-bold text-2xl'>Java Full Stack Development</p>
                <button className='border-2 py-1 px-12 md:px-36 bg-blue-800 rounded-lg' onClick={() => setShow1(true)}>Enroll Now</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default All
