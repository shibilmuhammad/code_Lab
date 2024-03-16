import { useRef, useState } from "react"
import { closeIcon, upload } from "../../utils/constants"
import TopNavigation from "../TopNavigation"
import userEvent from "@testing-library/user-event"
import { validateAddproject } from "../../utils/validateForm"
import { categories } from "../../utils/categories";
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {useNavigate} from 'react-router-dom'
import { frameworks } from "../../utils/frameWorks"

const AddProject = () => {
    const navigate = useNavigate()
    const title = useRef(null)
    const category = useRef(null)
    const liveLink = useRef(null)
    const overview = useRef(null)
    const projectLink = useRef(null)
    const [features,setFeatures] = useState(null)
    const framework = useRef(null)
    const database = useRef(null)
    const [thumbnail, setThumbnail] = useState(null);
    const [scrnshot, setScrnshot] = useState(null);
    const [formError, setFormError] = useState(null);
    const [frameWorksList,setFrameWorksList] = useState([])
    
    const formSubmit =(e)=>{
        alert(features)
        e.preventDefault()
        const validationResult = validateAddproject(title.current.value,category.current.value,liveLink.current.value,overview.current.value,scrnshot,features,thumbnail,framework.current.value,database.current.value,projectLink.current.value)
        setFormError(validationResult)
        if(!validationResult){
            axios.post('/addProject',{
               title : title.current.value,
               category: category.current.value,
               liveLink: liveLink.current.vlaue,
               overview: overview.current.value,
                thumbnail:thumbnail,
                features:features,
                framework:frameWorksList,
                database:database.current.value,
                screenShot:scrnshot,
                projectLink:projectLink.current.value

            }).then(({data})=>{
                if(data.status==='success')navigate('/')
            })
        }
    }   
    const handleThumbnailChange = (e) => {
        const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setThumbnail(reader.result);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
    };
    const handlescreenshotChange = (e) => {
        const files = Array.from(e.target.files);
		setScrnshot([]);
		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setScrnshot((oldImages) => [...oldImages, reader.result]);
				}
			};
			reader.readAsDataURL(file);
		});
    };
    const clearInput = (ref) => {
        if (ref.current) {
            ref.current.value = '';
        }
    };
    const renderOptions = () => {
        return categories.map((category, index) => (
            <option key={index} value={category}>
                {category}
            </option>
        ));
    };
    const exampleOverview = "This project is a web application that allows users to manage their tasks effectively.";
    const exampleFeatures = "1. User authentication and authorization"
    const exampleFramework = "MongoDB, Express.js, React, Node.js";
    const exampleDatabase = "MongoDB";

    const frameworkHandle = ()=>{
        frameWorksList.push(framework.current.value);
        setFrameWorksList([...frameWorksList]);
    }
  return (
    <div className="pb-10">
     <TopNavigation title={'Add project'} />
     <form className='px-4 mt-5 space-y-3' onSubmit={formSubmit}  encType="multipart/form-data">
            <div className='space-y-1 '>
                <label className='text-[#333333] font-medium'>Title </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <input ref={title}    placeholder='Code Lab' className='w-full outline-none' ></input>
                    <img alt='close' className='h-5' src={closeIcon} onClick={() => clearInput(title)}></img>
                </div>
            </div>

            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Category </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <select ref={category} placeholder='Shibil muhammad' className='w-full outline-none' >
                        {renderOptions()}
                    </select>
                </div>
            </div>
          

            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Project link(GD) </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <input ref={projectLink} placeholder='Paste Google Drive link here...' className='w-full outline-none pr-2' ></input>
                    <img alt='close' className='h-5' src={closeIcon} onClick={() => clearInput(projectLink)}></img>
                </div>
            </div>
            
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Live link </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <input ref={liveLink} placeholder='https://www.youtube.com/' className='w-full outline-none pr-2' ></input>
                    <img alt='close' className='h-5' src={closeIcon} onClick={() => clearInput(liveLink)}></img>
                </div>
            </div>

            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Overview </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <textarea ref={overview} placeholder={`Eg: ${exampleOverview}`} rows={5} className='w-full outline-none' ></textarea>
                </div>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Screenshots </label>
                 <div className="grid grid-cols-3 gap-2  ">
                    <div className="">
                        <input multiple  onChange={(e) => handlescreenshotChange(e)} type="file" id="scrnShot" hidden></input>
                        <label htmlFor="scrnShot"  className='flex items-center justify-center h-24  border-dashed border py-2 rounded-lg border-secondary-mainBorder px-2'>
                             <img alt="upload" className="h-12 w-12 opacity-50"  src={upload}></img>
               
                        </label>
                    </div>
                    {scrnshot?.map((item)=>{

                        return (<div className="border p-3 h-24 flex justify-center items-center"> 
                            <img alt="upload" className="h-full object-contain"  src={item}></img>
                        </div>)
                    })}
                </div>
                
            </div>

            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Features </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <ReactQuill  onChange={(e)=>setFeatures(e)} value={features} placeholder={`Eg: ${exampleFeatures}`}  rows={5} className='w-full outline-none' ></ReactQuill>
                </div>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Cover page thumbline </label>
                <input  onChange={(e) => handleThumbnailChange(e)} type="file" id="thumline" hidden></input>
                <label htmlFor="thumline" className='flex items-center h-36  justify-center w-full p-2 border border-dashed rounded-lg border-secondary-mainBorder px-2'>
                    {!thumbnail && <img alt="upload" className="h-12 w-12 opacity-50"  src={upload}></img>}
                    {thumbnail && <img  alt='upload' className="h-full w-full object-contain  " src={thumbnail}></img> }
                </label>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Frameworks/Languages used </label>
                <div className="flex flex-wrap   ">
                    {frameWorksList.map((framework,index)=>{
                        return(
                            <div 
                            id="new+div" 
                            className="flex bg-teritary-main rounded-full p-1 pl-3 w-max  gap-2 h-max mx-1 my-1 "> 
                            <div> 
                             <span class="text-white">{framework}</span> 
                            </div> 
                            <button 
                             onClick={() => { 
                              frameWorksList.splice(index,1) 
                              setFrameWorksList([...frameWorksList]) 
                             }} 
                             type="button" 
                             id="new+button" 
                             className=" text-white rounded-full h-6 w-6"> 
                            <i class="bi bi-x"></i> 
                            </button> 
                           </div>
                        )
                    })}
                </div>
             
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <select  ref={framework} className="w-full outline-none" onChange={frameworkHandle}>
                        {frameworks.map((framework,index)=><option  key={index} value={framework.name}>{framework.name}</option>)}
                    </select>
                </div>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Database </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <input ref={database} placeholder={`Eg: ${exampleDatabase}`}  className='w-full outline-none' ></input>
                </div>
            </div>
       
            <div className='' >
                <p className="text-sm text-red-600">{formError}</p>
                <button className='bg-teritary-main mt-6 w-full rounded-md py-2 text-white font-medium'>Save </button>
            </div>
  </form>

    </div>
  )
}

export default AddProject
