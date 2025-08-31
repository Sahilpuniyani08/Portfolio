import React from 'react'

const ProjectCard = ({ images }) => {
  return (
    <>
      <div className='relative group h-full lg:w-1/2 w-full hover:rounded-4xl transition-all overflow-hidden'>
        <img className='  h-full w-full object-cover' src={images?.image1} alt="image1" />
        <div className=' opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center'>
          <h2 className='text-white p-3 uppercase leading-2 pt-4 font-[font1] border-2 rounded-full text-xl '>Vior Le Projet</h2>
        </div>
      </div>
      <div className='relative group h-full lg:w-1/2 w-full hover:rounded-4xl transition-all overflow-hidden'>
        <img className='  h-full w-full object-cover' src={images?.image2} alt="image2" />
        <div className=' opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center'>
          <h2 className='text-white p-3 uppercase leading-2 pt-4 font-[font1] border-2 rounded-full text-xl '>Vior Le Projet</h2>
        </div>
      </div>

    </>
  )
}

export default ProjectCard