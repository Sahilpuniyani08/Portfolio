import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
  ]


  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 10%',
        end: 'top -150%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: true,
        anticipatePin: true,
        invalidateOnRefresh: true,
        onUpdate: function (elem) {
          let imageIndex
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          }
          else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>

      <div className='section1 py-1'>
        <div ref={imageDivRef} className='lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] overflow-hidden lg:rounded-3xl rounded-xl  absolute  lg:top-20 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className="h-full w-full object-cover" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="image1" />
        </div>
        <div className='font-[font2] relative'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] uppercase leading-[17vw] text-center '>Soixan7e <br />Douze</h1>
          </div>
          <div className='lg:pl-[40%] p-3 lg:mt-20  mt-2 text-balance'>
            <p className='lg:text-6xl text-xl  leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'>

      </div>
    </div>
  )

}

export default Agence;