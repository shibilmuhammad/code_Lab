import React, { useEffect, useState } from 'react'
import TopNavigation from '../TopNavigation'
import {  desktop, github, projectDemo, screenshot, time } from '../../utils/constants'
import RelatedProjects from '../RelatedProjects'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { calcDate } from '../../utils/dateDifference'
import { formatedDate } from '../../utils/formateDate'
import ScreenshotsCarousel from '../ScreenshotCarrousel'
import DownloadCard from '../DownloadCard'

const Description = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [Description,setDescription] = useState(null);
    const [ssvisible,setSSVisible] = useState(false)
    useEffect(()=>{
        window.scroll(0,0)
        async function getDescription(){
            const {data} = await axios.get('/description/'+id)

            setDescription(data)
        }
        getDescription()
    
    },[])

  return (
    <div  >
        {ssvisible && (
        <ScreenshotsCarousel
        screenshots={Description?.screenshots}
        setSSVisible={setSSVisible}/>
        )}
        <TopNavigation title={Description?.publisher} bg={'white'} />
        <div className='bg-primary-main'>
            <div className='flex justify-between items-center p-4'>
                <div className='w-8/12'>
                    <h1 className='text-xl font-semibold capitalize text-[#333333]'>{Description?.title}</h1>
                    <p className='text-xs text-[#666666] mt-1 '>{Description?.publisher}</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <div className='px-5 bg-[#D2E8DB] text-[#0BA046]'>
                    {Description?.price}
                    </div>
                    <div className=" flex items-center space-x-1 ">
                        <img className='w-5 h-5' alt="eye" src={time} />
                        <p className="text-xs text-[#666666]">{calcDate(Description?.published_date).result || "Recent"}</p>
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <img className='h-52 w-full object-cover' alt='bg-img' src={Description?.thumbnail}></img>
            </div>
            <div className='w-full flex mt-5 px-2 '>
               
                    <a href={Description?.live_link} className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium py-1 rounded-lg mx-3  bg-teritary-main'>
                            <img alt='moniter' className='h-5' src={desktop}></img>
                            <span>Live Demo</span>
                    </a>
            
          
                <button onClick={()=>{setSSVisible(true)}} className='w-1/2 flex items-center justify-center space-x-3 text-white font-medium py-1 rounded-lg mx-3 bg-secondary-bg'>
                        <img alt='moniter' className='h-5' src={screenshot}></img>
                        <span>Screenshots</span>
                </button>
            </div>
            <div className='mx-4  mt-5 bg-white'>
                <h1 className='py-2 px-2 border-b font-medium'>Overview</h1>
                <p className='text-[#666666] px-2 text-sm py-3 first-letter:uppercase'>{Description?.overview}</p>
            </div>
            <div className='mx-4  mt-5 bg-white'>
                <h1 className='py-2 px-2 border-b font-medium'>Features</h1>
                <div className='p-2 text-[#666666] ' dangerouslySetInnerHTML={{
                    __html:Description?.features
                }}>

                </div>
            </div>

            
            <div className='mx-4  mt-5 bg-white drop-shadow-xl'>
                <h1 className='py-2 px-2 border-b font-medium'>Information</h1>
                <div>
                    <table className='w-full text-[#666666] text-sm '>
                        <tr className='bg-primary-main'>
                          <td className='w-1/2 px-2 py-3  '>Category</td>
                          <td className='text-teritary-main'>{Description?.category}</td>
                        </tr>
                        <tr className=''>
                          <td className=' px-2 py-3'>First Release</td>
                          <td>{Description && formatedDate(Description?.published_date)}</td>
                        </tr>
                        <tr className='bg-primary-main'>
                          <td className='px-2 py-3'>Last update</td>
                          <td>{Description && formatedDate(Description?.last_updated)}</td>
                        </tr>
                     
                        <tr className=''>
                          <td className='px-2 py-3'>Frameworks/Languages </td>
                          <td>{Description?.frameworks_used.join(', ')}</td>
                        </tr>
                        <tr className='bg-primary-main'>
                          <td className='px-2 py-3'>Data base  </td>
                          <td>{Description?.db_used}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='px-2 py-4 flex flex-col items-center  mx-4 rounded-sm space-y-3 bg-secondary-mainBorder my-3'>
                <div> <img className='h-16' alt='github' src={github}></img></div>
                <div className='flex flex-col items-center'>
                    <h1 className='capitalize'>{Description?.publisher}</h1>
                       <p className='text-xs text-[#666666] '>Web Developer</p>
                </div>
              

               <button onClick={()=>navigate('/developer/'+Description?.publisher_id)} className='w-1/2 flex items-center justify-center  space-x-3 text-white font-medium py-1 rounded-lg mx-3  bg-teritary-main'>
                        <img alt='moniter' className='h-5' src={desktop}></img>
                        <span>View Profile </span>
                </button>

            </div>
            <div className='px-4'>
                Related Projects
            </div>
            <RelatedProjects />
            {!ssvisible && (
				<DownloadCard
					id={Description?.project_id}
					url={Description?.project_link}
				/>
			)}
        </div>
       
    </div>
  )
}

export default Description
