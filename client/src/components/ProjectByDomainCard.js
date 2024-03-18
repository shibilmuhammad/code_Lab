import React from 'react'
import { ReactLogo } from '../utils/constants'
import { Link } from 'react-router-dom'

const ProjectByDomainCard = ({name,src}) => {
  return (

    <div className=''>
          <Link to={'/domain/'+name}>
        <div className='flex  mr-2 mt-2 space-y-1 flex-col w-fit items-center   '>
            <div className='bg-primary-main text-center p-3 w-16 rounded-lg'>
                 <img className='w-10 h-10 object-contain' alt='framework_LOGO' src={src}></img>
            </div>
            <div className=''> 
               <p className='text-[#666666] text-sm max-w-20 truncate '>{name}</p>
             </div>
               
        </div>
        </Link>
    </div>
  )
}

export default ProjectByDomainCard
