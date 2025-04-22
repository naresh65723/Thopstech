import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import img from "../images/python.jpg"
import img1 from "../images/java.jpeg"
import Footer from './Footer'







function App() {
  const [data, setData] = useState(false)
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  if (data) {
    return <Navigate to='/courses' />
  }
  if (show) {
    return <Navigate to='/python' />
  }
  if (show1) {
    return <Navigate to='/java' />
  }
  return (
    <div className='bg-[#eee]'>
      
      <div className='bg-[#1884cb] h-[100vh] text-white text-center pt-[15%]'>
        <h1 className='text-4xl font-bold'>Thops Tech Career Solutions</h1>
        <p className='my-9'>Tell me and I forget, teach me and I may remember, Involve me and I learn.</p>
        <button className='border-2 bg-white py-2 px-6 text-blue-500 rounded-full' onClick={() => setData(true)}>View All Courses</button>
      </div>

      <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-10 px-16 md:px-32 relative -top-[80px]'>
        <div className='bg-white p-6 lg:p-12 border-2 rounded-lg'>
          <h1 className='text-2xl font-bold'>Actionable Training</h1>
          <p>Action Learning is a process of insightful questioning and reflective listening.</p>
        </div>
        <div className='bg-white p-6 lg:p-12 border-2 rounded-lg'>
          <h1 className='text-2xl font-bold'>Interesting Quizzes</h1>
          <p>Quizzes can make the session more interactive and more informative.</p>
        </div>
        <div className='bg-white p-6 lg:p-12 border-2 rounded-lg'>
          <h1 className='text-2xl font-bold'>Premium Material</h1>
          <p>Good material can help you to revive your knowledge in less time.</p>
        </div>
      </div>

      <div className='text-center mt-16'>
        <h1 className='text-4xl font-bold mb-3'>Our Most Popular Courses</h1>
        <p>Knowledge is the essential key to growth</p>
      </div>
      
      <div>
        <div className='md:flex flex flex-col md:flex-row gap-8 mt-20 text-center px-32'>
          <div className='border-2 bg-white pb-2'>
              <img src={img} alt="Python" />
              <p className='font-bold text-2xl'>Python Full Stack Development</p>
              <button className='border-2 py-1 px-12 md:px-36 bg-blue-800 rounded-lg' onClick={() => setShow(true)}>Enroll Now</button>
          </div>
          <div className='border-2 bg-white pb-2'>
              <img src={img1} alt="java" />
              <p className='font-bold text-2xl'>Java Full Stack Development</p>
              <button className='border-2 py-1 px-12 md:px-36 bg-blue-800 rounded-lg' onClick={() => setShow1(true)}>Enroll Now</button>
          </div>
        </div>
        <div className='text-center py-32'>
          <h1 className='text-4xl font-bold mb-7'>Be in Demand with Our Professional Training</h1>
          <p>To push your career forward, you will need to pursue in-demand skills to expand your knowledge and </p>
          <p>capabilities and set yourself apart from other candidates.</p>
        </div>
        
      </div>

      <Footer/>
    </div>
  )
}

export default App
