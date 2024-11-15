import React from 'react'
import img1 from "../../assets/images/images1.svg"
import "./Home.css"
export default function Home() {
  return (
    <div className='bg-[#1abc9c] flex justify-center items-center pb-10 mt-14 pt-14'>

<div className='text-white sm:w-[80%]  md:w-[50%] mt-10 flex flex-col items-center gap-5 py-5'>
<img className='minism:w-[60%] sm:w-[45%] md:w-[35%]' src={img1} alt/>
<h2 className='sm:text-[1.3rem] md:text-[2rem]  uppercase'>Start Framework</h2>
<span className='starDesign relative px-5'>
<i class="fa-solid fa-star"></i>
</span>
<p  className=''>
Graphic Artist - Web Designer - Illustrator</p>
</div>
    </div>
  )
}
