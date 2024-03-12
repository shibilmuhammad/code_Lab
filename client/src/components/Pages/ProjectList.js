import React from 'react'
import TopSearchBar from '../TopSearchBar'
import TopNavigation from '../TopNavigation'
import LatestProjectCard from '../LatestProjectCard'
import { sorting } from '../../utils/constants'
import RelatedProjects from '../RelatedProjects'

const ProjectList = () => {
  return (
    <div>
        <TopNavigation title={'Category Name'} />
      <TopSearchBar title={'Search Projects...'} />
      <div className='flex justify-between pr-4'>
               <h1 className="p-2 font-medium text-[#333333]"> Projects(2)</h1>
               <div className='flex items-center'>
                    <img className='h-5 w-5' alt='sorting' src={sorting}></img>
                    <p className='text-teritary-main font-'>Sort</p>
               </div>
            </div>
            
            <div className='space-y-5 pt-3 px-2'>
                <RelatedProjects />
                <RelatedProjects />
    
            </div>
    </div>
  )
}

export default ProjectList
