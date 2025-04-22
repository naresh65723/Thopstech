import React, {useState} from 'react'

import {FiPhone, FiMapPin, FiMail, FiPlus, FiMinus} from 'react-icons/fi'
import Footer from './Footer'


export default function Contact() {
  const makemail = () => {
    window.location.href="mailto:contact@thopstech.com"
  }
  const makecall = () => {
    window.location.href="tel:+917989751956"
  }
  const makecall1 = () => {
    window.location.href="tel:+917989764438"
  }
  const openMap = () => {
    window.location.href = "https://maps.app.goo.gl/WE5DvdCoWf5GNcbq5"
  }
  const [one, setOne] = useState(false)
  const p = () => setOne(!one)
  const [two, setTwo] = useState(false)
  const q = () => setTwo(!two)
  const [three, setThree] = useState(false)
  const r = () => setThree(!three)
  const [four, setFour] = useState(false)
  const s = () => setFour(!four)
  
 
  return (
    <div className='bg-[#eee]'>
        <div className='bg-[#1884cb] text-center p-20 text-white'>
            <h1 className='text-4xl font-bold'>Need Help?</h1>
            <p className='mt-6'>Always feel free and write to us</p>
        </div>
        <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-10 px-32 py-28 font-semibold'>
          <div className='bg-[#fff] p-6 lg:p-12 border-2 rounded-lg text-center flex flex-col'>
            <p className='ml-[45%] border-2 border-blue-500 rounded-full h-10 w-10 flex justify-center items-center text-blue-700 mb-2'> <FiPhone/></p>
            <button onClick={makecall}>+91-7989751956</button>
            <button onClick={makecall1}>+91-7989764438</button>
          </div>
          <div className='bg-[#fff] p-6 lg:p-12 border-2 rounded-lg text-center'>
            <p className='ml-[45%] border-2 border-blue-500 rounded-full h-10 w-10 flex justify-center items-center text-blue-700 mb-2'> <FiMail/></p>
            <p>Write Us</p>
            <button onClick={makemail}>contact@thopstech.com</button>
          </div>
          <div className='bg-[#fff] p-6 lg:p-12 border-2 rounded-lg text-center'>
            <p className='ml-[45%] border-2 border-blue-500 rounded-full h-10 w-10 flex justify-center items-center text-blue-700 mb-2'> <FiMapPin/></p>
            <p>Main OfficeBangalore Branch:2nd floor, Krishna senate, Service Rd, Subbaiah Reddy Colony, outer ring road, junction, Marathahalli, Sarjapur outer ring road , Bengaluru, Karnataka, 560037.</p>
            <button onClick={openMap} className='mt-3'>Get Directions</button>
          </div>
        </div>
        <h1 className='font-bold text-center text-4xl mb-5'>Send Us a Message</h1>

        <div className='bg-white border-2 mx-20 md:mx-52 px-14 py-10'>
          <form className=''>
            <label className='text-xl font-semibold text-slate-700 ml-1' for = 'name'>Full Name </label><br/>
            <input className='border-2 border-slate-500 rounded-lg w-full p-2' type='text' id='name' required/><br/><br/>

            <label className='text-xl font-semibold text-slate-700 ml-1' for = 'email'>Email </label><br/>
            <input className='border-2 border-slate-500 rounded-lg w-full p-2' type='email' id='email' required/><br/><br/>

            <label className='text-xl font-semibold text-slate-700 ml-1' for = 'subj'>Subject </label><br/>
            <input className='border-2 border-slate-500 rounded-lg w-full p-2' type='texta' id='subj'/><br/><br/>

            <label className='text-xl font-semibold text-slate-700 ml-1' for = 'message'>Message </label><br/>
            <textarea className='border-2 border-slate-500 rounded-lg w-full p-2' id='message' required></textarea><br/><br/>

            <button className='border-2 bg-blue-600 px-10 py-3 rounded-full'>Send Message</button>
          </form>
        </div>
        <h1 className='font-bold text-center text-4xl py-9'>Frequently Asked Questions</h1>

        <div className='mx-10 md:mx-[25%] pb-10 rounded-lg'>
          <div className='border-2 bg-white p-5'>
            <button onClick={p} className={`flex p-2 gap-1 justify-center items-center font-bold text-[18px] duration-300 ${
          one ? 'text-blue-900' : 'text-black'
        }`}>
              {one ? <FiMinus/>:<FiPlus/> }
              <p>Does the institute provide training certificates?</p>
            </button>
            {one && (
              <p>Yes, 100%. We provide a training certificate after the completion of the respective training course.</p>
            )}
          </div>
          <div className='py-5 border-2 bg-white p-5'>
              <button onClick={q} className={`flex p-2 gap-1 justify-center items-center font-bold text-[18px] duration-300 ${
          two ? 'text-blue-900' : 'text-black'
        }`}>
                {two ? <FiMinus/>:<FiPlus/> }
                <p>What skills or education do I require to enroll in the course?</p>
              </button>
              {two && (
                <p>Any student who graduated between 2019 to 2023 is eligible to take this course. You don’t need to have any special skills. We will train you from the very beginning.</p>
              )}
          </div>
          <div className='border-2 bg-white p-5'>
            <button onClick={r} className={`flex p-2 gap-1 justify-center items-center font-bold text-[18px] duration-300 ${
          three ? 'text-blue-900' : 'text-black'
        }`}>
              {three ? <FiMinus/>:<FiPlus/> }
              <p>Do you provide a job guarantee after completion of course?</p>
            </button>
            {three && (
              <p>The courses have designed to make you industry ready in the skill of programming. If you focus on learning, You will get a placed 100%. We will keep assisting you with the latest job postings in top MNCs. We will train you by taking mock interviews etc.</p>
            )}
          </div>
          <div className='py-5 border-2 bg-white p-5'>
            <button onClick={s} className={`flex p-2 gap-1 justify-center items-center font-bold text-[18px] duration-100 ${
          four ? 'text-blue-900' : 'text-black'
        }`}>
              {four ? <FiMinus /> : <FiPlus/> }
              <p>What courses do you offer?</p>
            </button>
            {four && (
              <div>
                <p>We are now offering courses that are focused on JAVA and PYTHON.</p>
                <li>Python Full Stack Development</li>
                <li>Java Full Stack Development</li>
              </div>
            )}
          </div>
        </div>
        <Footer/>
            
    </div>
  )
}
