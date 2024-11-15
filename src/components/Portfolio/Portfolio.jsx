import React from 'react'
import "./Portfolio.css"
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import img1 from "../../assets/images/images1 (1).png"
import img2 from "../../assets/images/images1 (2).png"
import img3 from "../../assets/images/images1 (3).png"

export default function Portfolio() {
  function openImage(x){


  }
  let [images, setImages] = useState([
    {Imgsrc:img1,id:1},
    {Imgsrc:img3,id:2},
    {Imgsrc:img2,id:3},
    {Imgsrc:img1,id:4},
    {Imgsrc:img3,id:5},
    {Imgsrc:img2,id:6}
  
  ])

  const [openModal, setOpenModal] = useState();
  return (
    
<>
    <div className=' py-7 flex justify-center pt-10 '>
<div className='mt-14  w-[90%] text-center pt-10 ' >

<h2 className='text-[2.5rem] text-[#2c3e50] font-bold  uppercase '>portfolio component</h2>
<span className='starDesign3 relative px-5'>
<i className="fa-solid fa-star"></i>
</span>

<div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[95%] mx-auto mt-10 gap-6 '>
  {images.map((image,index) => (
<div className='rounded-lg portfolioHover overflow-hidden relative' onClick={() => {
  setOpenModal(true)
  setOpenModal(image.Imgsrc)
}} key={image.id}>
  <img className='w-[100%]' src={image.Imgsrc} alt="" />
  <div className='hello absolute top-0 left-0 right-0 bottom-0 bg-[#1abc9c]/80 flex justify-center items-center opacity-0'>
<p className='' >  <i className="fa-solid fa-plus text-[6rem]"></i></p>
  </div>
</div>
  ))}

</div>
</div>

</div>



{/* <img className='w-[100%]' src={img1} alt="" /> */}



<Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>


          <div className="space-y-6">
          <img className='w-[100%]' src={openModal} alt="" />
          </div>
        

      </Modal>
    </>



  )
}
