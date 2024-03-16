import { useEffect, useState } from "react"
import LatestProjectCard from "../LatestProjectCard"
import TopNavigation from "../TopNavigation"
import axios from "axios"


const MyProjects = () => {
  const[projects,setProjects] = useState([])
  useEffect(()=>{
    async function getMyProjects(){
      const {data} = await axios.get('/myprojects')
      setProjects(data)
    }
    getMyProjects()
   
  },[])
  return (
    <div>
        <TopNavigation title={'My Projects'} />
        <h1 className="p-2 font-medium text-[#333333]"> Projects({projects?.length})</h1>
        <div className='space-y-2 pt-3 px-2'>
            {projects?.map((item)=><LatestProjectCard data={item} key={item._id} />)}
        </div>
    </div>
  )
}

export default MyProjects
