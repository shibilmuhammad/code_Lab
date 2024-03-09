import React from 'react'
import ProjectByDomainCard from '../ProjectByDomainCard'
import TopNavigation from '../TopNavigation'
import TopSearchBar from '../TopSearchBar'

const Categories = () => {
  return (
    <div className='bg-primary-mainBg'>
        <TopNavigation title='categoires'/>
        <TopSearchBar title="Search Categories..." />
        <div className=' pt-3 flex flex-wrap px-2 '>
           <ProjectByDomainCard />
           <ProjectByDomainCard />
           <ProjectByDomainCard />
           <ProjectByDomainCard />
           <ProjectByDomainCard />
           <ProjectByDomainCard />
           <ProjectByDomainCard />
           <ProjectByDomainCard />
     
        </div>
    </div>
  )
}

export default Categories
