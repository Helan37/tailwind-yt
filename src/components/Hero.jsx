import React from 'react';
import { BsListNested } from 'react-icons/bs';
import { ReactTyped  } from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white '>
       <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>LEARNING TAILWIND CSS WITH REACT</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> Learn Tailwind CSS </h1>
           <div className='flex justify-center items-center '> 
             <p className='md:text-5xl sm:text-4xl text-l font-bold py-4'> Simple and easy to learn for </p>
             <ReactTyped 
             className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
             strings={['B2B, B2C']} 
             typeSpeed={120} 
             backSpeed={140} 
             loop
             />
            </div>  
            <p className='md:text-2xl text-xl font-bold text-gray-400'>Style you web page with Tailwind CSS</p>       
       <button className='bg-[#00df9a] w-[200px] rounded-md'>Get started</button>
       </div>
    </div>
  )
}

export default Hero
