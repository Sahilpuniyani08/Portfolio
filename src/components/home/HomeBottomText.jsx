import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center text-white gap-2 pb-3'>
        {/* <p className='absolute right-0 bottom-80 lg:w-80 font-[font1] text-xl '>K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p> */}
      <div className='border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] lg:h-24 flex items-center px-5 lg:px-10 rounded-full uppercase border-white'>
        <Link className='text-[6vw] lg:mt-6' to='/projects'>Projects</Link>
      </div>
      <div className='border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] lg:h-24 flex items-center px-5 lg:px-10 rounded-full uppercase border-white'>
        <Link className='text-[6vw] lg:mt-6' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText