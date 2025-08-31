import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

 const projects = [
    {
      image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg"
    },
    {
      image1: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      image2: "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg"
    },

  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:'30px',
      stagger:{
       amount:0.1
      },
      scrollTrigger:{
        trigger:'.lol',
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      }
    })
  })
 

  return (
    <div className='p-2 mb-[100vh]'>
      <div className='lg:pt-[35vh] pt-[50vh] '>
        <h2 className='font-[font2] lg:text-[14vw] text-7xl uppercase'>Projects</h2>
      </div>
      <div className='-lg:mt-10 lol'>
        {
          projects.map((images, index) => {
            return (
              <div key={index} className='hero w-full lg:h-[400px] mb-4 flex lg:flex-row flex-col gap-2 '>
                <ProjectCard images={images} />
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Projects
