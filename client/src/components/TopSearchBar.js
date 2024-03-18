import React, { useRef, useState } from 'react'
import { SEARCH_ICON, noresult } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import EmptyCard from './EmptyCard'

const TopSearchBar = ({title}) => {
  const searchResult = useRef(null)
  const [emptySearch,setEmptySearch] = useState(false)
  const navigate = useNavigate()
  function handleForm(e){
    e.preventDefault()
    if(searchResult.current.value==="") return setEmptySearch(true)
    navigate('/search/'+searchResult.current.value.toLowerCase())
  }
  return (
    <form onSubmit={handleForm} className='m-2 mt-5'>
        <div className='  w-full rounded-md border  border-secondary-mainBorder flex justify-between px-2 items-center'>
            <input ref={searchResult} className='px-2 py-2 w-full outline-none' placeholder={title}></input>
            <button>
               <img alt='search' className='w-8 h-8 object-contain' src={SEARCH_ICON}></img>
            </button>
        </div>
        {emptySearch && 	<EmptyCard
					title={"No results found"}
					img={noresult}
					des={"No results found. Please try again "}
				/>}
    </form>

  )
}
export default TopSearchBar
