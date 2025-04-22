import React from 'react'
import Footer from './Footer'

export default function About() {
  return (
    <div className='bg-[#eee]'>
        <div className='bg-[#1884cb] text-center p-20 text-white'>
            <h1 className='text-4xl font-bold'>About Us</h1>
            <p className='mt-6'>Number one Training and Development center that placed students</p>
            <p>successfully in top MNCs.</p>
        </div>
        <div className='mx-[25%] mt-16 bg-white'>
            <div className='text-center border-2 mb-16 p-10 md:p-16'>
                <h1 className='text-3xl font-bold'>Our Story</h1>
                <p className='text-justify mt-5'>We started the training in the colleges called Campus Recruitment Training(CRT) in 2017. We trained many colleges all over India and made those college students get placed in top MNCs. We started raising exponentially and getting discovered by some top colleges.</p>
                <p className='text-justify mt-5'>In Aug 2021, We officially registered a company named ThopsTech. All services are provided seamlessly with colleges and as well as in our training institute. We are the number one Training and Development center that placed students successfully in top MNCs.</p>
            </div>
        </div>
        <h1 className='text-4xl text-center font-bold mb-8'>Number Speaks</h1>
        <div className='flex gap-20 md:gap-36 justify-center items-center pb-20'>
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
