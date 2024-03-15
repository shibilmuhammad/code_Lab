import React from 'react'
import TopDeveloperCard from './TopDeveloperCard'
import { useSelector } from 'react-redux'
const TopDevelopers = () => {
  const topDevelopers = useSelector((store)=>store?.project?.topDevelopers)
  return (
    <div className='p-2 space-y-3'>
        <div>
            <h1 className='text-lg font-medium text-[#333333]'>Top Developers</h1>
        </div>
        <div className='flex space-x-3 max-w-full overflow-auto '>
            {topDevelopers?.map((item,index)=><TopDeveloperCard key={index} data={item}/>)}
        </div>
     

    
    </div>
  )
}

export default TopDevelopers
