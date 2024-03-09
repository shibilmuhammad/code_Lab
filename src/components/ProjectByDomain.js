import ProjectByDomainCard from "./ProjectByDomainCard"

const ProjectByDomain = () => {
  return (
    <div className='p-2 mt-3'>
          <div className='flex items-center justify-between px-2'>
            <h1 className='text-lg font-medium text-[#333333]'> Projects By Domains</h1>
            <p className='text-sm text-teritary-main font-medium'>More</p>
        </div>
        <div className=' justify-start pt-3 flex flex-wrap '>
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

export default ProjectByDomain
