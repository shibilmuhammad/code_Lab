import React, { useEffect, useState } from 'react'
import TopNavigation from '../TopNavigation'
import { ReactLogo, github, screenshot, views } from '../../utils/constants'
import LatestProjectCard from '../LatestProjectCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { frameworks } from '../../utils/frameWorks'
import ErrorPage from './ErrorPage'
const Developer = () => {
  const {publisher_id} = useParams();
  const[developerDetails,setDeveloperDetaisl]= useState(null)
  const[error,setError] =useState(null)
  useEffect(()=>{
    try{
      async function getDeveloper(){
        const {data} = await axios.get('/developer/'+publisher_id); 
        setDeveloperDetaisl(data)
      }
      getDeveloper()
    }catch(err){  
      setError(err)
    }
   
    
  },[])
  console.log(error);
  if(error) return <ErrorPage />
  return (
    <div>
        <TopNavigation title={'Developer name '} />
        <div className='px-2 py-4 flex flex-col items-center  mx-4 rounded-sm space-y-3  my-3'>
                <div className='border border-teritary-main h-16 w-16 rounded-full '> <img className='h-16 w-16 rounded-full p-1' alt='github' src={developerDetails?.developer?.avatar || github}></img></div>
                <div className='flex flex-col items-center'>
                    <h1 className='capitalize'>{developerDetails?.developer?.name}</h1>
                       <p className='text-xs text-[#666666] capitalize '>{developerDetails?.developer?.title}</p>
                </div>
                 <div className='px-8 text-xs text-[#666666] capitalize'>
                     <p>{developerDetails?.developer?.bio}</p>
                 </div>
        </div>

        <div className='w-full flex mt-2 px-10 rounded-lg '>
                <button className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium   bg-[#7653FF]  border-r-2 rounded-l-lg'>
                        <div className='p-2 bg-[#9074FF] rounded-lg'>
                             <img alt='moniter' className='h-5 w-5' src={screenshot}></img>
                        </div>
                        <div className='flex flex-col items-start'>
                          <span className='text-sm'>Projects</span>
                          <span className='font-bold'> {developerDetails?.projectsCount || 0}</span>
                        </div>
                       
                </button>

                <button className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium py-2  bg-[#7653FF] rounded-r-lg'>
                <div className='p-2 bg-[#9074FF] rounded-lg'>
                             <img alt='moniter' className='h-5 w-5' src={views}></img>
                        </div>
                        <div className='flex flex-col items-start'>
                          <span className='text-sm'>Views</span>
                          <span className='font-bold '>{developerDetails?.views || 0}</span>
                        </div>
                </button>
        </div>

        <div className='px-2 mt-10'>
          <h1 className='text-lg font-medium text-[#333333]'>Tech Stack known({developerDetails?.stacks_used.length})</h1>
          <div className='px-2  flex flex-wrap'>
          {developerDetails?.stacks_used.map((stack, index) => {
          const stackDetails = frameworks.find(item => item.name === stack);
            if (stackDetails) {
                return <div className=' items-center justify-center px-2 h-20 flex'><img key={index} className='h-10 w-10 object-contain  mr-2' alt='tech' src={stackDetails.image} /> </div> 
            } else {
                return null;
            }
})}
          </div>
        </div>
        <div className='px-2 mt-4'>
        <h1 className='text-lg font-medium text-[#333333]'>Projects({developerDetails?.projects.length})</h1>
        <div className='space-y-3 mt-3'>
        {developerDetails?.projects.map((item)=>{
          return <LatestProjectCard key={item._id} data={item} />
        })}
        </div>
       
        </div>
       
    </div>
  )
}

export default Developer
