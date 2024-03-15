import React, { useEffect, useState } from 'react'
import TopNavigation from '../TopNavigation'
import { PrivacyIcon, SettingsIcon, avatar, contactIcon, desktop, github, projectsIcon } from '../../utils/constants'
import axios from 'axios'

const Profile = () => {
    const [userDetails,setUserDetails] = useState(null)
    useEffect( ()=>{
        async function getProfileDetails(){
            const {data} = await axios.get('/profile');
            setUserDetails(data)
        }
        getProfileDetails()
    },[])
  return (
    <div>
        <TopNavigation title={'Profile'}  />
        <div className='bg-primary-main h-screen'>
            <div className='px-2 py-4 flex flex-col items-center  mx-4 rounded-sm space-y-3  py-13'>
                    <div className='h-16 w-16 bg-teritary-main rounded-full border flex justify-center items-center'>
                        <img alt='avatar' className='h-full w-full ' src={avatar}></img>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-medium'>{userDetails?.name}</h1>
                        <p className='text-xs text-[#666666] '>{userDetails?.title}</p>
                    </div>
            </div>
          <div className='flex justify-center  mt-2' >
            <button className='px-6  rounded-2xl   flex items-center justify-center space-x-3 text-white  py-1  mx-3  bg-teritary-main'>
                 <span>Edit Profile </span>
            </button>
          </div>

          <div className='bg-white rounded-md drop-shadow-lg mt-5 mx-10 px-3 py-5 space-y-4'>
            <div className='flex items-center juc space-x-3'>
                <div className=' p-2 rounded-full bg-[#EEEAFF] '>
                    <img alt='Projects' className='h-5 w-5' src={projectsIcon}></img>
                </div>
                <span className=''>My projects </span>
            </div>
            <div className='flex items-center juc space-x-3'>
                <div className=' p-2 rounded-full bg-[#EEEAFF] '>
                    <img alt='Projects' className='h-5 w-5' src={contactIcon}></img>
                </div>
                <span className=''>Contact Us </span>
            </div>
            <div className='flex items-center juc space-x-3'>
                <div className=' p-2 rounded-full bg-[#EEEAFF] '>
                    <img alt='Projects' className='h-5 w-5' src={SettingsIcon}></img>
                </div>
                <span className=''>Settings </span>
            </div>
            <div className='flex items-center juc space-x-3'>
                <div className=' p-2 rounded-full bg-[#EEEAFF] '>
                    <img alt='Projects' className='h-5 w-5' src={PrivacyIcon}></img>
                </div>
                <span className=''>Privacy and Policy </span>
            </div>
            <div className='flex items-center juc space-x-3'>
                <div className=' p-2 rounded-full bg-[#EEEAFF] '>
                    <img alt='Projects' className='h-5 w-5' src={contactIcon}></img>
                </div>
                <span className=' text-red-500'>Logout </span>
            </div>
          </div>
          <h1 className='absolute bottom-10 mx-auto right-0 left-0 text-center text-[#666666] text-sm '>Desgined by <span className='text-teritary-main'>Secure3</span></h1>
        </div>
      
    </div>
    
  )
}

export default Profile
