import React from 'react'
import LatestProjectCard from './LatestProjectCard'

const LatestProjects = () => {
  return (
    <div className='p-2 mt-3'>
          <div className='flex items-center justify-between px-2'>
            <h1 className='text-lg font-medium text-[#333333]'>Latest Projects</h1>
            <p className='text-sm text-teritary-main font-medium'>More</p>
        </div>
        <div className='space-y-2 pt-3'>
            <LatestProjectCard />
            <LatestProjectCard />

        </div>
    </div>
  )
}

export default LatestProjects
