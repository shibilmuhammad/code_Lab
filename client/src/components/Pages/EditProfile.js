import React, { useEffect, useRef, useState } from 'react'
import TopNavigation from '../TopNavigation'
import { avatar, closeIcon, hide } from '../../utils/constants'
import axios from 'axios'
import Demo from '../CropView'

const EditProfile = () => {
    const[userDetails,setUserDetails] = useState(null);
    const name = useRef(null)
    const headLine = useRef(null)
    const bio = useRef(null)
    const [avatarImg, setAvatar] = useState(avatar);
	const [picked, setPicked] = useState(false);
	const [cropped, setCropped] = useState(null);
    function clearInput(ref){
        if(ref.current) ref.current.value = ''
    }
    useEffect( ()=>{
        async function getProfileDetails(){
            const {data} = await axios.get('/profile');
            setUserDetails(data)
            name.current.value = data?.name
            headLine.current.value = data?.title
            bio.current.value = data?.bio
        }   
        getProfileDetails()
    },[])
    async function handleForm(e){
        e.preventDefault();
        const {data} = axios.post('/editprofile',{name:name.current.value,title:headLine.current.value,bio:bio.current.value ,avatar: cropped ? cropped : avatar,})
        
    }
    const onChangeImage = (e) => {
		const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === 2) {
				setAvatar(reader.result);
				setPicked(true);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};
  
  return (
    <div>
        <TopNavigation title={'Edit Profile'} />
        <form  onSubmit={(e)=>{handleForm(e)}} className=' py-3'>
        {picked && (
					<Demo img={avatarImg} setPicked={setPicked} setCropped={setCropped} />
				)}
            <h1 className='text-sm text-[#666666] py-3 border-b px-2'>Provide details about yourself and any other pertinent information</h1>
            <div className='px-2 mt-1'>
                <h1 className='text-lg font-medium text-[#333333]'>Basic Information</h1>
                <div className='flex mt-2  justify-between pr-10'>
                    <div className=''>
                        <p className='text-sm text-[#666666]'>Profile Photo</p>
                        <p className='text-xs text-[#666666]  '>Recommend 300*300</p>
                        <input onChange={onChangeImage} type='file' hidden id='imageInput'></input>
                        <div className='space-x-2 mt-4 '>
                            <label htmlFor='imageInput' type='button' className='px-4 py-1 border-2  rounded-md text-[#333333] text-sm' >Change</label>
                            <button onClick={()=>{setAvatar(avatar);setCropped(avatar)} }  type='button' className='px-4 py-1 border-2  rounded-md text-[#333333] text-sm'>Remove</button>
                        </div>
                    </div>
                    
                    <div className='h-16 w-16 bg-teritary-main rounded-full border flex justify-center items-center'>
                        <img alt='avatar' className='h-full w-full rounded-full ' src={cropped?cropped:userDetails?.avatar ||  avatarImg}></img>
                    </div>
                </div>
            </div>
            
           
            <div className='px-2 mt-8 space-y-5'>
                <div className='space-y-1'>
                        <label className='text-[#333333] font-medium'>Full name </label>
                        <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                        <input placeholder='John Doe' ref={name}  className='w-full outline-none' ></input>
                        <img   onClick={()=>clearInput(name)} alt='close' className='h-5' src={closeIcon}></img>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <label className='text-[#333333] font-medium'>Headline </label>
                        <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                        <input  ref={headLine}  placeholder='Eg:Web developer' className='w-full outline-none' ></input>
                        <img onClick={()=>clearInput(headLine)} alt='close' className='h-5' src={closeIcon}></img>
                        </div>
                    </div>

                    <div className='space-y-1'>
                        <label className='text-[#333333] font-medium'>Bio </label>
                        <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                        <textarea ref={bio} className='w-full outline-none' placeholder="Example : Hey everyone ! I am a designer and blogger. I am exper in HTML ,CSS and Javascript" cols={8} rows={6} ></textarea>
                        </div>
                    </div>
            </div>
            <div className='px-4  mt-20'>
                <button className='bg-teritary-main w-full rounded-md py-2 text-white font-medium'>Save </button>
            </div>
           
        </form>
    </div>
  )
}

export default EditProfile
