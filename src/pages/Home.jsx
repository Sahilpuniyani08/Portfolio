import React from 'react'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Video from '../components/home/Video'


const Home = () => {
    return (
        <div>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>
            <div className='h-screen w-screen relative  overflow-hidden flex flex-col justify-between'>
                <HomeHeroText />
                <HomeBottomText />
            </div>
        </div>
    )
}

export default Home