import React, { useEffect, useState } from 'react'
import TopSearchBar from '../TopSearchBar'
import TopNavigation from '../TopNavigation'
import LatestProjectCard from '../LatestProjectCard'
import { sorting } from '../../utils/constants'
import RelatedProjects from '../RelatedProjects'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProjectByDomain = () => {
    const {domainName} = useParams();
    const [projects,setprojects]= useState([])
    useEffect(()=>{
        async function getProjects(){
            const {data} = await axios.get('/getprojectsbydomain/'+domainName)
            setprojects(data.projects)
        }
        getProjects()
    },[])
  return (
    <div>
        <TopNavigation title={domainName +' Projects'} />
      <TopSearchBar title={'Search Projects...'} />
      <div className='flex justify-between pr-4'>
               <h1 className="p-2 font-medium text-[#333333]"> Projects({projects?.length})</h1>
               <div className='flex items-center'>
                    <img className='h-5 w-5' alt='sorting' src={sorting}></img>
                    <p className='text-teritary-main font-'>Sort</p>
               </div>
            </div>
            
            <div className='space-y-5 pt-3 px-2'>
                {projects?.map((item)=>  <RelatedProjects data={item} domainName={domainName}/>)}
            </div>
    </div>
  )
}

export default ProjectByDomain
