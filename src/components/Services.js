import React from 'react'
import ban from '../images/02p.jpg';


function Services() {
  return (
    <div className='font-serif'>
      <div >
          <img src={ban} className="h-[70vh] w-full"/>
         <h1 className='text-center text-6xl font-bold capitalize mt-6'>Services</h1>
      </div>
      <div className='justify-center flex mt-10  gap-20 h-[60vh]'>
        <div className='w-72  h-82  shadow-2xl capitalize'>
          <h1 className='text-center text-2xl mt-7 font-bold'>web development</h1>
          <p className='text-9xl text-center mt-10'><i class="fa-solid fa-computer"></i></p>
          <p className='capitalize text-xl mt-7 text-center'>build your own website with the help of html,css, javascript,react</p>
          
          
        </div>

        <div className='w-72  h-82  shadow-2xl capitalize'>
          <h1 className='text-center text-2xl font-bold mt-7'>online marketing</h1>
          <p className='text-9xl text-center mt-10'><i class="fa-solid fa-chart-simple"></i></p>
          <p className='capitalize text-xl mt-7 text-center'>build your carear with online marketing and become a sucessfull data anilyst</p>
          
          
        </div>

        <div className='w-72 h-82  shadow-2xl capitalize'>
          <h1 className='text-center text-2xl font-bold mt-7'>graphic designing</h1>
          <p className='text-9xl text-center mt-10'><i class="fa-solid fa-laptop"></i></p>
          <p className='capitalize text-xl mt-7 text-center'>make a carear in graphic designing and grab a good position in the field</p>
          
          
        </div>

      </div>
    </div>
  )
}

export default Services
