import React from 'react';
import screen from "../images/screen1.png";
import aliyan from "../images/canva1.jpg";

function About() {
  return (
    <div className='font-sans'>
      <h1 className='text-6xl text-yellow-400 underline  text-center capitalize pt-5 font-bold'> about us</h1>

      <div className='flex justify-center pt-10'>
        <div className='w-[40rem]'>
          <h1 className='capitalize  text-3xl font-bold'><span className='text-yellow-400'>f</span>rontend developers</h1>
          <p className='capitalize font-bold text-xl mt-5'>Learn Web Development online at your own pace. Start today and improve your skills. Find the right instructor for you. Choose from many topics, skill levels, and languages. Courses in 60+ Languages. Over 213,000 Courses. Download To Your Phone. Lifetime Access.</p>
        </div>
        <div className=' '>
          <img src={screen} className='w-96 '/>
        </div>
      </div>

      <div className='flex justify-center gap-20 bg-gray-200 h-[80vh] w-full'>
        <div>
          <img src={aliyan} className='w-82 h-[50vh] mt-20 shadow-2xl rounded'/>
        </div>
        <div className='w-96 h-full pt-20 capitalize'>
          <p className=' text-4xl font-bold '>about me</p>
          <p className='text-2xl mt-5 '>hellow there! my name name is aliyan rahmat. i am a frontend web developer. and now i am in learning face so i try to learn new things and expend my knowledge </p>
          <button className='bg-blue-600 h-12 mt-10 ml-16 w-36 rounded-full text-white text-xl capitalize'>explore more</button>
        </div>
      </div>
    </div>
  )
}

export default About
