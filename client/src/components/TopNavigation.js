import { Back } from "../utils/constants"

const TopNavigation = ({title,bg}) => {
  return (
    <div className={` flex justify-between p-2 h-12${bg==='white' ? ' bg-primary-mainBg':' bg-primary-main'}`}>
        <div className="flex items-center " onClick={()=>{window.history.back()}}>
            <img alt="back" src={Back} className="h-4"></img>
        </div>
        <div className="flex justify-center items-center w-full text-[#333333] font-medium">{title}</div>
    </div>
  )
}

export default TopNavigation
