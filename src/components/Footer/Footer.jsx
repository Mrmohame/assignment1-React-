import React from 'react'
// import fontawesome from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <>
<div className='bg-[#2c3e50]  pt-7 pb-28 text-white relative'>
<div className=' grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[85%] mx-auto '>
        <div className='py-10 text-center'>
            <h2 className='font-bold uppercase text-[1.5rem] py-5'>LOCATION</h2>
            <p className='mb-3'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className='py-10 text-center'>
            <h2 className='font-bold uppercase text-[1.5rem] py-5'>AROUND THE WEB</h2>
            <span className='mediaStyle'>
            <i className="fa-brands fa-facebook"></i>
            </span>
            <span className='mediaStyle'>
            <i className="fa-brands fa-twitter"></i>
            </span>
            <span className='mediaStyle'>
            <i className="fa-brands fa-linkedin-in"></i>
            </span>
            <span className='mediaStyle'>
            <i className="fa-brands fa-chrome"></i>
            </span>
        </div>
        <div className='py-10 text-center'>
            <h2 className='font-bold uppercase text-[1.5rem] py-5'>ABOUT FREELANCER</h2>
            <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
<div className='text-center bg-[#1a252f] absolute bottom-0 left-0 right-0 py-4'>
        <h3>Copyright © Your Website 2021</h3>
    </div>
</div>
</>
  )
}
