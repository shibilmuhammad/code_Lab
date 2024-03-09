import { useRef, useState } from "react"
import { closeIcon, upload } from "../../utils/constants"
import TopNavigation from "../TopNavigation"
import userEvent from "@testing-library/user-event"
import { validateAddproject } from "../../utils/validateForm"
import { categories } from "../../utils/categories"



const AddProject = () => {
    const title = useRef(null)
    const category = useRef(null)
    const liveLink = useRef(null)
    const overview = useRef(null)

    const features = useRef(null)
    const framework = useRef(null)
    const database = useRef(null)
    const [thumbnail, setThumbnail] = useState(null);
    const [scrnshot, setScrnshot] = useState(null);
    const [formError, setFormError] = useState(null);

    
    const formSubmit =()=>{

        const validationResult = validateAddproject(title.current.value,category.current.value,liveLink.current.value,overview.current.value,scrnshot,features.current.value,thumbnail,framework.current.value,database.current.value)
        setFormError(validationResult)
    }   
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setThumbnail(file); 
    };
    const handlescreenshotChange = (e) => {
        const file = e.target.files[0];
        setScrnshot(file); 
    };
    const clearInput = (ref) => {
        if (ref.current) {
            ref.current.value = '';
        }
    };
    const renderOptions = () => {
        return categories.map((category, index) => (
            <option key={index} value={category.name}>
                {category.name}
            </option>
        ));
    };
    const exampleOverview = "This project is a web application that allows users to manage their tasks effectively.";
    const exampleFeatures = "1. User authentication and authorization\n2. Task creation, update, and deletion\n3. Task categorization and prioritization";
    const exampleFramework = "MongoDB, Express.js, React, Node.js";
    const exampleDatabase = "MongoDB";


  return (
    <div className="pb-10">
     <TopNavigation title={'Add project'} />
     <form className='px-4 mt-5 space-y-3' onSubmit={(e)=>e.preventDefault()}>
      
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
                <input  onChange={(e) => handlescreenshotChange(e)} type="file" id="scrnShot" hidden></input>
                <label htmlFor="scrnShot"  className='flex items-center justify-center w-3/12  border py-4 rounded-lg border-secondary-mainBorder px-2'>
                    <img alt="upload" className="h-12 w-12 opacity-50" src={upload}></img>
                </label>
            </div>

            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Features </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <textarea ref={features}  placeholder={`Eg: ${exampleFeatures}`}  rows={5} className='w-full outline-none' ></textarea>
                </div>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Cover page thumbline </label>
                <input  onChange={(e) => handleThumbnailChange(e)} type="file" id="thumline" hidden></input>
                <label htmlFor="thumline" className='flex items-center justify-center w-full  border py-20 rounded-lg border-secondary-mainBorder px-2'>
                    <img alt="upload" className="h-12 w-12 opacity-50" src={upload}></img>
                </label>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Frameworks used </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <input ref={framework}  placeholder={`Eg: ${exampleFramework}`}   className='w-full outline-none' ></input>
                </div>
            </div>
            <div className='space-y-1'>
                <label className='text-[#333333] font-medium'>Database </label>
                <div className='flex items-center border py-2 rounded-lg border-secondary-mainBorder px-2'>
                    <input ref={database} placeholder={`Eg: ${exampleDatabase}`}  className='w-full outline-none' ></input>
                </div>
            </div>
       
            <div className='' onClick={formSubmit}>
                <p className="text-sm text-red-600">{formError}</p>
                <button className='bg-teritary-main mt-6 w-full rounded-md py-2 text-white font-medium'>Save </button>
            </div>
  </form>

    </div>
  )
}

export default AddProject
