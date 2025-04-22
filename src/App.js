import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

import logo from './images/thops-logo.png'
import log from './images/download.jpeg'
import Home from '../src/components/Home'
import Allcourses from '../src/components/Allcourses'
import Career from '../src/components/Career'
import Placements from '../src/components/Placements'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Python from '../src/components/Python'
import Java from '../src/components/Java'

function App() {
  const [isopen, setIsopen] = useState(false)
  const toggleMenu = () => setIsopen(!isopen)
  

  return (
    <div className="min-h-screen bg-[#0099ff]"
    style={{ backgroundImage: `url(${log})` }}>
      <Router>
        <nav className='text-lg flex justify-between items-center px-6 p-2 bg-[#009aff] text-white font-bold sticky top-0 z-10'>
          <div className='flex items-center gap-1 text-xl'>
            <img src={logo} alt='...' className='w-16 h-12'/>
            <p className='cursor-default'>ThopStech</p>
          </div>
          <div className=''>
            <div className='hidden md:flex gap-6'>
              <Link className='hover:text-slate-700' to='/'>Home</Link>
              <Link className='hover:text-slate-700' to='/courses'>AllCourses</Link>
              <Link className='hover:text-slate-700' to='/career'>Opportunities</Link>
              <Link className='hover:text-slate-700' to='/placements'>Placements</Link>
              <Link className='hover:text-slate-700' to='/about'>About</Link>
              <Link className='hover:text-slate-700' to='/contact'>Contact</Link> 
            </div>
            <div className='md:hidden'>
              <button onClick={toggleMenu}>
                {isopen? <FaTimes size={30}/> : <FaBars size={30}/>}
              </button>
            </div>
            
          </div>

        </nav>
        {isopen && (
              <div className='md:hidden flex flex-col gap-5 mx-auto w-full items-center bg-[#009aff] text-white font-bold pt-2'>
                <Link className='hover:text-slate-700' to='/'>Home</Link>
                <Link className='hover:text-slate-700' to='/courses'>AllCourses</Link>
                <Link className='hover:text-slate-700' to='/career'>Opportunites</Link>
                <Link className='hover:text-slate-700' to='/placements'>Placements</Link>
                <Link className='hover:text-slate-700' to='/about'>About</Link>
                <Link className='hover:text-slate-700' to='/contact'>Contact</Link> 
              </div>
            )}

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/courses' element={<Allcourses/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/placements' element={<Placements/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/python' element={<Python/>}/>
          <Route path='/java' element={<Java/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App


