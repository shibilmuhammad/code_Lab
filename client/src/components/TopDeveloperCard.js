import { Link } from "react-router-dom";
import { TopDeveloper, avatar } from "../utils/constants";
const TopDeveloperCard = ({data}) => {

  return (
    <Link to={'/developer/'+data?.publisher_id}>
    <div>
          
            <div className='text-center whitespace-nowrap'>
                <div className='w-20 h-20 border border-teritary-main rounded-full  inline-block p-[2px]'>
                    <img className='w-full h-full rounded-full ' alt='topDeveloper' src={data?.avatar || avatar}></img>
                </div>
                <p className='text-sm text-[#666666] whitespace-nowrap max-w-[86px] truncate capitalize '>{data.name}</p>
            </div>
            

    </div>
    </Link>
  )
}

export default TopDeveloperCard
