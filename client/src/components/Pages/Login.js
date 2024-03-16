import React, { useRef, useState } from 'react'
import { LOGO, closeIcon, hide, show } from '../../utils/constants'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const[hidePassword,setHidepassword]= useState(false)
    const email = useRef(null)
    const password  = useRef(null)
    const [validationError,setValidationError] = useState(null)
    const  clearInput = (ref)=>{
        if(ref){
          ref.current.value = ''
        }
      }
      const validateForm = (email,password)=>{
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(email.trim()==='')return "Enter your email first !!";
        if(!emailRegex.test(email)) return "email is not valid"
        if(password.trim()==='') return "Enter password and Try again!! "
        return null
      }
      const handleLogin = async (e)=>{
        e.preventDefault()
        const validateResult = validateForm(email.current.value,password.current.value)
        setValidationError(validateResult);
        const {data} = await axios.post('/login',{email:email.current.value,password:password.current.value})

        if(data.status==='User not exist')return setValidationError("User not exist .If you don't have an acccount click signup button")
        if(!data.status) return setValidationError('Incorrect password!!')

         navigate('/')
      }
    return (
        <form className='bg-primary-mainBg' onSubmit={(e)=>{handleLogin(e)}}>
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
                      <input ref={email} placeholder='johndoe@gmail.com' className='w-full outline-none' ></input>
                      <img onClick={()=>{clearInput(email)}} alt='close' className='h-5' src={closeIcon}></img>
                    </div>
                </div>
                <div className='space-y-1'>
                    <label className='text-[#333333] font-medium'>Password </label>
                    <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                      <input type={hidePassword?'text':'password'} ref={password} placeholder='Your password here' className='w-full outline-none' ></input>
                      <img alt='close' className='h-5' src={hidePassword?show:hide} onClick={()=>{setHidepassword(!hidePassword)  }}></img>
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
                <div className='mt-4'>   <span className='  text-sm text-red-500'>{validationError}</span></div>
            </div>
            <div className='px-4 my-10 '>
                <button className='flex py-2 rounded-lg  justify-center items-center text-white font-bold bg-teritary-main w-full px' >Login</button>
            </div>
            
            <p className='flex justify-center items-center text-[#666666]'>Don't  have an Account ? <Link to={'/signup'}><span  className='ml-1 text-teritary-main font-medium cursor-pointer'> Sign Up </span></Link></p>
        </form>
      )
}

export default Login
