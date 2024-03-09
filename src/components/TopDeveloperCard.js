import { TopDeveloper } from "../utils/constants";
const TopDeveloperCard = () => {
  return (
    <div>
        
            <div className='text-center whitespace-nowrap'>
                <div className='w-20 h-20 border border-teritary-main rounded-full  inline-block p-2'>
                    <img className='block ' alt='topDeveloper' src={TopDeveloper}></img>
                </div>
                <p className='text-sm text-[#666666] whitespace-nowrap max-w-[86px] truncate '>Akshay Sfdsaaini</p>
            </div>
            

    </div>
  )
}

export default TopDeveloperCard
