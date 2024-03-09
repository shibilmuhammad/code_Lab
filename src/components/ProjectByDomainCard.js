import React from 'react'
import { ReactLogo } from '../utils/constants'

const ProjectByDomainCard = () => {
  return (
    <div>
        <div className='flex mr-2 mt-2 space-y-1 flex-col w-fit items-center   '>
            <div className='bg-primary-main text-center p-3 w-16 rounded-lg'>
                 <img className='w-10' alt='framework_LOGO' src={ReactLogo}></img>
            </div>
                <p className='text-[#666666] text-sm '>React JS</p>
        </div>
      
    </div>
  )
}

export default ProjectByDomainCard
