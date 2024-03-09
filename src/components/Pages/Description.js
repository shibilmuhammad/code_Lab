import React from 'react'
import TopNavigation from '../TopNavigation'
import {  desktop, github, projectDemo, screenshot, time } from '../../utils/constants'
import RelatedProjects from '../RelatedProjects'

const Description = () => {
  return (
    <div  >
        <TopNavigation title={'Developer Name'} bg={'white'} />
        <div className='bg-primary-main'>
            <div className='flex justify-between items-center p-4'>
                <div className='w-8/12'>
                    <h1 className='text-sm capitalize text-[#333333]'> 5 fastest runner in the world that change your mind</h1>
                    <p className='text-xs text-[#666666] mt-1 '>Akshay Sainy</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <div className='px-5 bg-[#D2E8DB] text-[#0BA046]'>
                        Free
                    </div>
                    <div className=" flex items-center space-x-1 ">
                        <img className='w-5 h-5' alt="eye" src={time} />
                        <p className="text-xs text-[#666666]">11 min</p>
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <img className='h-52 w-full object-cover' alt='bg-img' src={projectDemo}></img>
            </div>
            <div className='w-full flex mt-5 px-2 '>
                <button className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium py-1 rounded-lg mx-3  bg-teritary-main'>
                        <img alt='moniter' className='h-5' src={desktop}></img>
                        <span>Live Demo</span>
                </button>
                <button className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium py-1 rounded-lg mx-3 bg-secondary-bg'>
                        <img alt='moniter' className='h-5' src={screenshot}></img>
                        <span>Screenshots</span>
                </button>
            </div>
            <div className='mx-4  mt-5 bg-white'>
                <h1 className='py-2 px-2 border-b font-medium'>Overview</h1>
                <p className='text-[#666666] px-2 text-sm py-3'>FPPlatform is the fixed-price marketplace software that is capable to launch fiverr clones, microworkers, etc. Ideal for micro jobs, tasks, errands, etc marketplace where consumers outsource micro tasks or sellers offer micro online and offline services.</p>
            </div>
            <div className='mx-4  mt-5 bg-white'>
                <h1 className='py-2 px-2 border-b font-medium'>Features</h1>
                <p className='text-[#666666] px-2 text-sm py-3'>FPPlatform is the fixed-price marketplace software that is capable to launch fiverr clones, microworkers, etc. Ideal for micro jobs, tasks, errands, etc marketplace where consumers outsource micro tasks or sellers offer micro online and offline services.</p>
            </div>

            <div className='mx-4  mt-5 bg-white'>
                <h1 className='py-2 px-2 border-b font-medium'>Requirements</h1>
                <p className='text-[#666666] px-2 text-sm py-3'>FPPlatform is the fixed-price marketplace software that is capable to launch fiverr clones, microworkers, etc. Ideal for micro jobs, tasks, errands, etc marketplace where consumers outsource micro tasks or sellers offer micro online and offline services.</p>
            </div>

            <div className='mx-4  mt-5 bg-white'>
                <h1 className='py-2 px-2 border-b font-medium'>Instructions</h1>
                <p className='text-[#666666] px-2 text-sm py-3'>FPPlatform is the fixed-price marketplace software that is capable to launch fiverr clones, microworkers, etc. Ideal for micro jobs, tasks, errands, etc marketplace where consumers outsource micro tasks or sellers offer micro online and offline services.</p>
            </div>

            <div className='mx-4  mt-5 bg-white drop-shadow-xl'>
                <h1 className='py-2 px-2 border-b font-medium'>Information</h1>
                <div>
                    <table className='w-full text-[#666666] text-sm '>
                        <tr className='bg-primary-main'>
                          <td className='w-1/2 px-2 py-3  '>Category</td>
                          <td className='text-teritary-main'>PHP Scripts</td>
                        </tr>
                        <tr className=''>
                          <td className=' px-2'>First Release</td>
                          <td>19 February 2024</td>
                        </tr>
                        <tr className='bg-primary-main'>
                          <td className='px-2 py-3'>Last update</td>
                          <td>19 February 2024</td>
                        </tr>
                        <tr className=''>
                          <td className='px-2 py-3'>Fiels included </td>
                          <td>php,.html,.sql,.xml</td>
                        </tr>
                        <tr className='bg-primary-main'>
                          <td className='px-2 py-3'>Frameworks/Languages </td>
                          <td>React JS</td>
                        </tr>
                        <tr className=''>
                          <td className='px-2 py-3'>Data base  </td>
                          <td>My sql ,mongodb</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='px-2 py-4 flex flex-col items-center  mx-4 rounded-sm space-y-3 bg-secondary-mainBorder my-3'>
                <div> <img className='h-16' alt='github' src={github}></img></div>
                <div className='flex flex-col items-center'>
                    <h1>Shibil Muhamad P k</h1>
                       <p className='text-xs text-[#666666] '>Web Developer</p>
                </div>
              
               <button className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium py-1 rounded-lg mx-3  bg-teritary-main'>
                        <img alt='moniter' className='h-5' src={desktop}></img>
                        <span>View Profile </span>
                </button>
            </div>
            <div className='px-4'>
                Related Projects
            </div>
            <RelatedProjects />
        </div>
       
    </div>
  )
}

export default Description
