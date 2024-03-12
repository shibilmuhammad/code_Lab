import React from 'react'
import { SEARCH_ICON } from '../utils/constants'

const TopSearchBar = ({title}) => {
  return (
    <div className='m-2 mt-5'>
        <div className='  w-full rounded-md border  border-secondary-mainBorder flex justify-between px-2 items-center'>
        <input className='px-2 py-2 w-full outline-none' placeholder={title}></input>
        <img alt='search' className='w-8 h-8' src={SEARCH_ICON}></img>
    </div>
    </div>
  )
}
export default TopSearchBar
