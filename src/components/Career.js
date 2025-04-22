import React, {useState} from 'react'
import {FiPlus, FiMinus} from 'react-icons/fi'
import Footer from './Footer'



function Career() {
    const [one, setOne] = useState(false)
    const p = () => setOne(!one)
    const [two, setTwo] = useState(false)
    const q = () => setTwo(!two)
  return (
    <div className='bg-[#eee]'>
        <div className='bg-[#1884cb] text-center p-20 text-white'>
            <h1 className='text-4xl font-bold'>Career Opportunities​</h1>
            <p className='mt-6'>Find the latest job opportunities</p>
        </div>
        <div className='flex gap-32 justify-center items-center text-4xl font-bold my-10'>
            <h1>Latest Jobs</h1>
            <h1>All Jobs postings</h1>
        </div>
        <div className='flex gap-28 justify-center items-center'>
            <div>
                <h1 className='text-xl'>Recent Posts</h1>
                <li>Accenture is hiring for freshers</li>
                <li>IQVIA is hiring for freshers</li>
                <li>Philips is hiring for freshers</li>
                <li>Amiti Software is hiring for freshers</li>
                <li>AtkinsRéalis is hiring for freshers</li>
                <li>Quest Global is hiring for freshers</li>
                <li>Innofied is hiring for freshers</li>
                <li>Chidhagni Group is hiring for freshers</li>
                <li>EY is hiring for freshers</li>
            </div>
            
            <div>
                <div>
                    <button onClick={p} className='flex p-2 gap-1 justify-center items-center'>
                        {one ? <FiMinus /> : <FiPlus/> }
                        <p className='font-bold'>Under Graduation</p>
                    </button>
                    {one && (
                    <div>
                        <li>B.E/B.Tech</li>
                        <li>B.Sc/BCA</li>
                        <li>BBA</li>
                        <li>B.Com</li>
                        <li>B.A</li>
                        <li>B.Pharm</li>
                        <li>BAF</li>
                    </div>
                    )}
                </div>
                <div>
                    <button onClick={q} className='flex p-2 gap-1 justify-center items-center'>
                        {two ? <FiMinus /> : <FiPlus/> }
                        <p className='font-bold'>Post Graduation</p>
                    </button>
                    {two && (
                    <div>
                        <li>M.E/M.Tech</li>
                        <li>MCA</li>
                        <li>M.Sc</li>
                        <li>MBA</li>
                        <li>M.Com</li>
                        <li>M.Pharm</li>
                    </div>
                    )}
                </div>

            </div>
        </div>
        <h1 className='text-4xl text-center font-bold my-10'>Number Speaks</h1>
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

export default Career
