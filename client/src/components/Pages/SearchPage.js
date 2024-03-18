import React, { useEffect, useState } from 'react'
import TopNavigation from '../TopNavigation'
import RelatedProjects from '../RelatedProjects'
import { noresult, sorting } from '../../utils/constants'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import TopSearchBar from '../TopSearchBar'
import EmptyCard from '../EmptyCard'

const SearchPage = () => {
    const {searchValue} = useParams()
    const location = useLocation()
    const [serchResults,setSearchResult] = useState([])
    useEffect(()=>{
        async function getSearchProjects(){
            const {data} = await axios.get('/search/'+searchValue.toLowerCase())
            setSearchResult(data)
        }
        getSearchProjects()
    },[location.pathname])
  return (
    <div>
     
        <TopNavigation title={searchValue} />
        <TopSearchBar title={'Search Projects...'} />
      

        {!serchResults.length===0 && (
      <div className='flex justify-between pr-4'>
        
               <h1 className="p-2 font-medium text-[#333333]"> Projects({serchResults?.length})</h1>
               <div className='flex items-center'>
                    <img className='h-5 w-5' alt='sorting' src={sorting}></img>
                    <p className='text-teritary-main font-'>Sort</p>
               </div>
      </div>
      )}
            {serchResults.length===0 && (
				<EmptyCard
					title={"No results found"}
					img={noresult}
					des={"No results found. Please try again "}
				/>
			)}
            
            <div className='space-y-5 pt-3 px-2'>
               {serchResults?.map((item)=> <RelatedProjects key={item._id} data={item}/> )}

            </div>
    </div>
  )
}

export default SearchPage
