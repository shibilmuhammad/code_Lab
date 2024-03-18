import { useSelector } from "react-redux"
import ProjectByDomainCard from "./ProjectByDomainCard"
import { frameworks } from "../utils/frameWorks"

const ProjectByDomain = () => {
  const domains = useSelector((store)=>store?.project?.category)
  
  return (
    <div className='p-2 mt-3'>
          <div className='flex items-center justify-between px-2'>
            <h1 className='text-lg font-medium text-[#333333]'> Projects By Domains</h1>
            <p className='text-sm text-teritary-main font-medium'>More</p>
        </div>
       
        <div className=' grid grid-cols-4 gap-3 pt-3  '>
        {domains?.map((stack, index) => {
          const stackDetails = frameworks.find(item => item.name === stack);
            if (stackDetails) {
                return  <ProjectByDomainCard src={stackDetails.image} name={stackDetails.name} />
            } else {
                return null;
            }
          })}
        </div>
    </div>
  )
}

export default ProjectByDomain
