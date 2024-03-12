import React from 'react'
import { LOGO, closeIcon, hide } from '../../utils/constants'

const ForgotPassword = () => {
    return (
        <div className='bg-primary-mainBg'>
            <div className='flex justify-center '>
                <div className='flex flex-col items-center  space-y-1 mt-20'>
                    <img className='w-8' alt='LOGO' src={LOGO}></img>
                    <p className='text-lg font-medium te'>CodeLab</p>
                </div>
               
            </div>
            <div className='my-8'>
                <h1 className='text-3xl font-bold text-[#333333] px-4 py-2'>Forgot password?</h1>
                <p className=' px-4 pb-2 text-[#666666] text-sm
                '>Enter your regigstered Email ID  to continue </p>
            </div>
            <div className='px-4 space-y-3'>
      
                <div className='space-y-1'>
                    <label className='text-[#333333] font-medium'>Email </label>
                    <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                      <input placeholder='Shibil muhammad' className='w-full' ></input>
                      <img alt='close' className='h-5' src={closeIcon}></img>
                    </div>
                </div>
             
            </div>
            <div className='px-4 my-10 '>
                <button className='flex py-2 rounded-lg  justify-center items-center text-white font-bold bg-teritary-main w-full px' >Continue</button>
            </div>
            
        </div>
      )
}

export default ForgotPassword
