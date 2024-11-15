import React from 'react'

export default function About() {
  return (
<div className='h-[95vh] flex justify-center items-center bg-[#1abc9c]'>
<div className=' w-[80%]  text-white py-4 mt-10'>
<div className='text-center'>
<h2 className='text-[2.5rem] mt-10 font-bold  uppercase '>about component</h2>
{/* <h2 className='text-[2rem]  uppercase py-3'>about component</h2> */}
 <span className='starDesign relative px-5 py-10'>
<i class="fa-solid fa-star"></i>
</span>
</div>
<div className='grid sm:grid-cols-1 lg:grid-cols-2 my-4'>
  <div>
    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete 
      source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
  <div>
    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS,
       and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
</div>
    </div>
</div>
  )
}
