import React from 'react'
import img from '../images/Sireesha.jpeg'
import img1 from '../images/poojitha.jpg'
import img2 from '../images/hemanth.png'
import img3 from '../images/kaneppa.jpg'
import Footer from './Footer'

function Placements() {
  return (
    <div className='bg-[#eee]'>
        <div className='bg-[#1884cb] text-center p-20 text-white'>
            <h1 className='text-4xl font-bold'>Placement Details</h1>
            <p className='mt-8'>Find the all students placement details here.</p>
        </div>
        <h1 className='text-4xl font-semibold mt-10 mb-3 text-center'>Number Speaks</h1>
        <div className='grid gap-6 grid-cols-2 md:mx-[30%] pb-10 p-6'>
            <div><img className='h-96 lg:w-96 border-2 border-slate-800' src={img} alt=''/></div>
            <div><img className='h-96 lg:w-96 border-2 border-slate-800' src={img2} alt=''/></div>
            <div><img className='h-96 lg:w-96 border-2 border-slate-800' src={img1} alt=''/></div>
            <div><img className='h-96 lg:w-96 border-2 border-slate-800' src={img3} alt=''/></div>    
        </div>
        <div className='flex gap-20 md:gap-36 pb-20 justify-center items-center'>
            <div>
                <h1 className='text-3xl font-bold'>10K+</h1>
                <p>Placements</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>100+</h1>
                <p>Colleges</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>50K+</h1>
                <p>Students</p>
            </div>      
        </div>
        <Footer/>
    </div>
  )
}

export default Placements
