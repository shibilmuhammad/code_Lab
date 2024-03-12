import React from 'react'
import TopNavigation from '../TopNavigation'
import { ReactLogo, github, screenshot, views } from '../../utils/constants'
import LatestProjectCard from '../LatestProjectCard'
const Developer = () => {
  return (
    <div>
        <TopNavigation title={'Developer name '} />
        <div className='px-2 py-4 flex flex-col items-center  mx-4 rounded-sm space-y-3  my-3'>
                <div> <img className='h-16' alt='github' src={github}></img></div>
                <div className='flex flex-col items-center'>
                    <h1>Shibil Muhamad P k</h1>
                       <p className='text-xs text-[#666666] '>Web Developer</p>
                </div>
                 <div className='px-8 text-xs text-[#666666]'>
                     <p>Example : Hey everyone ! I am a designer and blogger. I am exper in HTML ,CSS and Javascript</p>
                 </div>
        </div>

        <div className='w-full flex mt-2 px-10 rounded-lg '>
                <button className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium   bg-[#7653FF]  border-r-2 rounded-l-lg'>
                        <div className='p-2 bg-[#9074FF] rounded-lg'>
                             <img alt='moniter' className='h-5 w-5' src={screenshot}></img>
                        </div>
                        <div className='flex flex-col items-start'>
                          <span className='text-sm'>Projects</span>
                          <span className='font-bold'> 14</span>
                        </div>
                       
                </button>

                <button className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium py-2  bg-[#7653FF] rounded-r-lg'>
                <div className='p-2 bg-[#9074FF] rounded-lg'>
                             <img alt='moniter' className='h-5 w-5' src={views}></img>
                        </div>
                        <div className='flex flex-col items-start'>
                          <span className='text-sm'>Views</span>
                          <span className='font-bold '>14</span>
                        </div>
                </button>
        </div>

        <div className='px-2 mt-10'>
          <h1 className='text-lg font-medium text-[#333333]'>Tech Stack known(5)</h1>
          <div className='px-2  flex flex-wrap'>
            <img className='h-10 mr-2' alt='tech' src={ReactLogo}></img>
            <img className='h-10 mr-2' alt='tech' src={ReactLogo}></img>
          </div>
          
        </div>

        <div className='px-2 mt-4'>
        <h1 className='text-lg font-medium text-[#333333]'>Projects(5)</h1>
        <div className='space-y-3 mt-3'>
          <LatestProjectCard />
          <LatestProjectCard />
        </div>
       
        </div>
       
    </div>
  )
}

export default Developer
