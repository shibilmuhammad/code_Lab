import { useEffect, useState } from "react"
import LatestProjectCard, { MyprojectCard } from "../LatestProjectCard"
import TopNavigation from "../TopNavigation"
import axios from "axios"
import BottomAddproject from "../BottomAddproject"


const MyProjects = () => {
  const[projects,setProjects] = useState([])
  useEffect(()=>{
    async function getMyProjects(){
      const {data} = await axios.get('/myprojects')
      setProjects(data)
    }
    getMyProjects()
   
  },[])
  const Card = MyprojectCard(LatestProjectCard)
  return (
    <div>
        <TopNavigation title={'My Projects'} />
        <h1 className="p-2 font-medium text-[#333333]"> Projects({projects?.length})</h1>
        <div className='space-y-2 pt-3 px-2'>
            {projects?.map((item)=><Card data={item} key={item._id} />)}
        </div>
        <BottomAddproject/>
    </div>
  )
}

export default MyProjects
