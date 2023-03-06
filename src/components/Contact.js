import React from 'react'

function Contact() {
  return (
    <div>
      <div className='flex justify-center gap-10'>
      <div className='w-72  h-72 mt-20 shadow-2xl rounded-full capitalize'>
          
          <p className='text-6xl text-center pt-5 '><i class="fa-solid fa-location-dot"></i></p>
          <h1 className='text-center text-3xl font-bold mt-7'>location</h1>
          <p className='capitalize text-xl mt-7 text-center'>xyz street newyork</p>
          
          
        </div>

        <div className='w-72  h-72 mt-20 shadow-2xl rounded-full capitalize'>
          
          <p className='text-6xl text-center pt-5 '><i class="fa-solid fa-phone"></i></p>
          <h1 className='text-center text-3xl font-bold mt-7'>call us</h1>
          <p className='capitalize text-xl mt-7 text-center'>03112209944</p>
          
          
        </div>

        <div className='w-72  h-72 mt-20 shadow-2xl rounded-full capitalize'>
          
          <p className='text-6xl text-center pt-5 '><i class="fa-solid fa-envelope"></i></p>
          <h1 className='text-center text-3xl font-bold mt-7'>email</h1>
          <p className='capitalize text-xl mt-7 text-center'>aliyanrahmat6@gmail.com</p>
          
          
        </div>

        <div className='w-72  h-72 mt-20 shadow-2xl rounded-full capitalize'>
          
          <p className='text-6xl text-center pt-5 '><i class="fa-brands fa-facebook"></i></p>
          <h1 className='text-center text-3xl font-bold mt-7'>facebook</h1>
          <p className='capitalize text-xl mt-7 text-center'>aliyan rahmat</p>
          
          
        </div>
      </div>
      <div className='capitalize ml-[30rem] text-center mt-20 shadow-2xl h-[70vh]  w-96'>
        <h1 className='text-6xl font-bold'>contact us</h1>
        <div className='block'>
          <div><input className='w-72 h-8 p-2 border mt-10' type="text"  placeholder="enter your name" name="search"/></div>
        <div><input className='w-72 h-8 p-2 border mt-10' type="text"  placeholder="enter your last name" name="search"/></div>
            <div><input className='w-72 h-32 p-10 20 border mt-10' type="text"  placeholder="type your suggestion here" name="search"/></div>
            <button className=' capitalize text-2xl h-10 w-28 bg-blue-800 rounded text-white mt-5'>submit</button>
        </div>
      
      </div>
    </div>
  )
}

export default Contact
