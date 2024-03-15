import React, { useRef, useState } from 'react'
import { LOGO, closeIcon, hide, show } from '../../utils/constants'
import axios from 'axios'

import {Link, useNavigate} from 'react-router-dom'

const SignUp = () => { 
  const navigate = useNavigate()
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const[hidePassword,setHidepassword]= useState(false)
  const [validationError,setValidationError] = useState(null)
  const  clearInput = (ref)=>{
    if(ref){
      ref.current.value = ''
    }
  }
  const validateForm = (name,email,password)=>{
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(name.trim()==='')return "Name can't be empty ";
    if(email.trim()==='')return "email can't be empty";
    if(!emailRegex.test(email)) return "email is not valid"
    if(password.trim()==='') return "Password can't be empty "
    return null
  }
  const  handleSignUp = async (e)=>{
    e.preventDefault()
    const validateResult = validateForm(name.current.value,email.current.value,password.current.value)
    setValidationError(validateResult);
    try{
      const {data} = await axios.post('/signup',{name:name.current.value,email:email.current.value,password:password.current.value})     
      if(data.status==="User already Exist")return  setValidationError(data.status);
      navigate('/')
    }catch(error){
      console.log(error);
    }
  }
  return (
    <form className='bg-primary-mainBg' onSubmit={(e)=>{handleSignUp(e)}}>
        <div className='flex justify-center '>
            <div className='flex flex-col items-center  space-y-1 mt-20'>
                <img className='w-8' alt='LOGO' src={LOGO}></img>
                <p className='text-lg font-medium te'>CodeLab</p>
            </div>
           
        </div>
        <div className='my-8'>
            <h1 className='text-3xl font-bold text-[#333333] px-4 py-2'>User Sign Up</h1>
            <p className=' px-4 pb-2 text-[#666666] text-sm
            '>Please fill your details to create your account</p>
        </div>
        <div className='px-4 space-y-3'>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Full name </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                  <input ref={name} placeholder=' Eg: John Doe' className='w-full outline-none' ></input>
                  <img onClick={()=>{clearInput(name)}} alt='close' className='h-5' src={closeIcon}></img>
                </div>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Email </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                  <input ref={email} placeholder='Eg: johndoe@gmail.com' className='w-full outline-none' ></input>
                  <img onClick={()=>{clearInput(email)}} alt='close' className='h-5' src={closeIcon}></img>
                </div>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Password </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                  <input type={hidePassword?'text':'password'} ref={password} placeholder='Your Password Here..' className='w-full outline-none' ></input>
                  <img alt='close' className='h-5' src={hidePassword?show:hide} onClick={()=>{setHidepassword(!hidePassword)  }}

                 ></img>
                </div>
            </div>
        </div>
        <div className='mt-4'>   <span className='px-5  text-sm text-red-500'>{validationError}</span></div>
        <div className='px-4 my-10 '>
            <button className='flex py-2 rounded-lg  justify-center items-center text-white font-bold bg-teritary-main w-full px' >Sign up</button>
        </div>
        
        <p className='flex justify-center items-center text-[#666666]'>Already have an Account ?<Link to={'/login'}><span  className='ml-1 text-teritary-main font-medium cursor-pointer'> Sign in </span></Link></p>
    </form>
  )
}

export default SignUp
