import React from 'react'
import TopNavigation from '../TopNavigation'
import { closeIcon, hide } from '../../utils/constants'

const EditProfile = () => {
  return (
    <div>
        <TopNavigation title={'Edit Profile'} />
        <div className=' py-3'>
            <h1 className='text-sm text-[#666666] py-3 border-b px-2'>Provide details about yourself and any other pertinent information</h1>
            <div className='px-2 mt-1'>
                <h1 className='text-lg font-medium text-[#333333]'>Basic Information</h1>
                <div className='flex mt-2  justify-between pr-10'>
                    <div className=''>
                        <p className='text-sm text-[#666666]'>Profile Photo</p>
                        <p className='text-xs text-[#666666]  '>Recommend 300*300</p>
                        <div className='space-x-2 mt-4 '>
                            <button className='px-4 py-1 border-2  rounded-md text-[#333333] text-sm'>Change</button>
                            <button className='px-4 py-1 border-2  rounded-md text-[#333333] text-sm'>Remove</button>
                        </div>
                    </div>
                    
                    <div className='h-16 w-16 bg-secondary-mainBorder rounded-full'></div>
                </div>
            </div>
            
           
            <div className='px-2 mt-8 space-y-5'>
                <div className='space-y-1'>
                        <label className='text-[#333333] font-medium'>Full name </label>
                        <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                        <input placeholder='Shibil muhammad' className='w-full' ></input>
                        <img alt='close' className='h-5' src={closeIcon}></img>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <label className='text-[#333333] font-medium'>Headline </label>
                        <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                        <input placeholder='Shibil muhammad' className='w-full' ></input>
                        <img alt='close' className='h-5' src={closeIcon}></img>
                        </div>
                    </div>

                    <div className='space-y-1'>
                        <label className='text-[#333333] font-medium'>Bio </label>
                        <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                        <textarea placeholder='Shibil muhammad' className='w-full outline-none' placeholder="Example : Hey everyone ! I am a designer and blogger. I am exper in HTML ,CSS and Javascript" cols={8} rows={6} ></textarea>
                        </div>
                    </div>
            </div>
            <div className='px-4  mt-20'>
                <button className='bg-teritary-main w-full rounded-md py-2 text-white font-medium'>Save </button>
            </div>
           
        </div>
    </div>
  )
}

export default EditProfile
