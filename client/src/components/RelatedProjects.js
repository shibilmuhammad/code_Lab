import React from 'react'
import { Show, downloads, projectDemo, time } from '../utils/constants'

const RelatedProjects = () => {
  return (
    <div className='bg-white mx-4 pb-4 rounded-md shadow-lg'>
          <div className='px-4 rounded-xl relative '>
                <img className='h-52 rounded-md w-full object-cover' alt='bg-img' src={projectDemo}></img>
                <div className='
                '>
                        <span className='px-2 text-sm rounded-md top-1 bg-black bg-opacity-50  text-white absolute '>React</span>
                        <span className=' ml-16 px-2 text-sm rounded-md top-1  bg-black bg-opacity-50  text-white absolute '>Node js</span>
                </div>
                <div className='mt-3 bg-white'>
                    <h1 className='text-sm capitalize text-[#333333]'> 5 fastest runner in the world that change your mind</h1>
                    <p className='text-xs text-[#666666] mt-1 '>Akshay Sainy</p>
                </div>
            </div>

      <div className='flex items-center justify-between pr-4'>
            <div className="flex items-center space-x-5 px-4 mt-2">
              <div className="flex items-center space-x-1">
                <img className="w-5 h-5" alt="eye" src={Show} />
                <p className="text-xs text-[#666666]">1.5 k</p>
              </div>
              <div className="flex items-center whitespace-nowrap space-x-1">
                <img className='w-5 h-5 ' alt="eye" src={downloads} />
                <p className="text-xs text-[#666666]">1.5 k</p>
              </div>
              <div className=" flex items-center space-x-1">
                <img className='w-5 h-5' alt="eye" src={time} />
                <p className="text-xs text-[#666666]">11 min</p>
              </div>
          </div>
          <div className='px-5 bg-[#EEE9FE] text-[#5429FF]'>
                            Free
          </div>
      </div>
   
    </div>
  )
}

export default RelatedProjects
