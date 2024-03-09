import React from 'react'
import TopNavigation from '../TopNavigation'
import LatestProjectCard from '../LatestProjectCard'
import { sorting } from '../../utils/constants'

const LatestProject = () => {
    return (
        <div>
            <TopNavigation title={'Latest projects'}   />
            <div className='flex justify-between pr-4'>
               <h1 className="p-2 font-medium text-[#333333]"> Projects(2)</h1>
               <div className='flex items-center'>
                    <img className='h-5 w-5' alt='sorting' src={sorting}></img>
                    <p className='text-teritary-main font-'>Sort</p>
               </div>
            </div>
            
            <div className='space-y-2 pt-3 px-2'>
                <LatestProjectCard />
                <LatestProjectCard />
    
            </div>
        </div>
      )
}

export default LatestProject
