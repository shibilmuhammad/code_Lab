import React from 'react'
import { Show, downloads, projectDemo, time } from '../utils/constants'
import { calcDate } from '../utils/dateDifference'
import { Link } from 'react-router-dom'

const RelatedProjects = ({data,domainName}) => {
  return (
    <Link to={'/description/'+data?.project_id}>
    <div className='bg-white mx-4 pb-4 rounded-md shadow-lg mb-4'>
          <div className='px-4 rounded-xl relative '>
                <img className='h-52 rounded-md w-full object-cover' alt='bg-img' src={data?.thumbnail}></img>
                <div className='
                '>
                        <span className='px-2 text-sm rounded-md top-1 bg-black bg-opacity-50 text-white absolute max-w-16 truncate'>{domainName}</span>
                      
                        {data?.frameworks_used[0] !== domainName ? (
              <span className='ml-[68px] px-2 text-sm rounded-md top-1 bg-black bg-opacity-50 text-white absolute max-w-16 truncate'>
                  {data?.frameworks_used[0]}
              </span>
                ) : (
                    <span className='ml-[68px] px-2 text-sm rounded-md top-1 bg-black bg-opacity-50 text-white absolute max-w-16 truncate'>
                        {data?.frameworks_used[1]}
                    </span>
                )}
                </div>
                <div className='mt-3 bg-white'>
                    <h1 className='text-sm capitalize text-[#333333]'> {data?.title}</h1>
                    <p className='text-xs text-[#666666] mt-1 '>{data?.publisher}</p>
                </div>
            </div>

      <div className='flex items-center justify-between pr-4'>
            <div className="flex items-center space-x-5 px-4 mt-2">
              <div className="flex items-center space-x-1">
                <img className="w-5 h-5" alt="eye" src={Show} />
                <p className="text-xs text-[#666666]">{data?.views}</p>
              </div>
              <div className="flex items-center whitespace-nowrap space-x-1">
                <img className='w-5 h-5 ' alt="eye" src={downloads} />
                <p className="text-xs text-[#666666]">{data?.downloads}</p>
              </div>
              <div className=" flex items-center space-x-1">
                <img className='w-5 h-5' alt="eye" src={time} />
                <p className="text-xs text-[#666666]">{calcDate(data?.published_date).result || 'Recent' }</p>
              </div>
          </div>
          <div className='px-5 bg-[#EEE9FE] text-[#5429FF]'>
                           {data?.price}
          </div>
      </div>
   
    </div>
    </Link>
  )
}

export default RelatedProjects
