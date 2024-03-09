import React from 'react'
import { LOGO, closeIcon, hide } from '../../utils/constants'

const Login = () => {
    return (
        <div className='bg-primary-mainBg'>
            <div className='flex justify-center '>
                <div className='flex flex-col items-center  space-y-1 mt-20'>
                    <img className='w-8' alt='LOGO' src={LOGO}></img>
                    <p className='text-lg font-medium te'>CodeLab</p>
                </div>
               
            </div>
            <div className='my-8'>
                <h1 className='text-3xl font-bold text-[#333333] px-4 py-2'>User Login</h1>
                <p className=' px-4 pb-2 text-[#666666] text-sm
                '>Please fill your details to access your account</p>
            </div>
            <div className='px-4 space-y-3'>
      
                <div className='space-y-1'>
                    <label className='text-[#333333] font-medium'>Email </label>
                    <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                      <input placeholder='Shibil muhammad' className='w-full' ></input>
                      <img alt='close' className='h-5' src={closeIcon}></img>
                    </div>
                </div>
                <div className='space-y-1'>
                    <label className='text-[#333333] font-medium'>Password </label>
                    <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                      <input placeholder='Shibil muhammad' className='w-full' ></input>
                      <img alt='close' className='h-5' src={hide}></img>
                    </div>
                </div>
                <div className='space-y-1 flex justify-between items-center mt-3'>
                    <div className='flex items-center space-x-2 text-sm text-[#666666] '>
                        <input id='remeberME' type='checkbox'></input>
                        <label for='remeberME' >Remeber Me</label>
                    </div>
                    <div>
                       <span  className='text-sm text-teritary-main '> Forgotten password ?  </span>
                    </div>
                   
                </div>
            </div>
            <div className='px-4 my-10 '>
                <button className='flex py-2 rounded-lg  justify-center items-center text-white font-bold bg-teritary-main w-full px' >Sign up</button>
            </div>
            
            <p className='flex justify-center items-center text-[#666666]'>Don't  have an Account ? <span  className='ml-1 text-teritary-main font-medium'> Sign Up </span></p>
        </div>
      )
}

export default Login
