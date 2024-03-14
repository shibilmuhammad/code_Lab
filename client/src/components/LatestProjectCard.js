import { Show, downloads, projectDemo, time } from "../utils/constants"
import { calcDate } from "../utils/dateDifference"
import {Link} from 'react-router-dom'

const LatestProjectCard = ({data}) => {

  return (
    <Link to={'/description/'+data.project_id}>
 <div className="flex w-full space-x-3 p-3 rounded-md border-primary- to-secondary-mainBorder border "> 

  <div className="w-4/12 p-1">
    <img  className="rounded-md w-full h-full object-cover" src={data?.thumbnail} alt="latest-project" />
  </div>

  <div className="w-6/12 ">
    <div className="space-y-2">
      <h1 className="text-xs text-teritary-main font-medium uppercase tracking-wider">{data?.category}</h1>
      <p className="text-xs text-[#333333]">{data?.title}</p>
      <p className="text-xs text-[#666666] capitalize">{data?.publisher}</p>
    </div>

    <div className="flex justify-between whitespace-nowrap items-center mt-1 w-full">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <img className="w-5 h-5" alt="eye" src={Show} />
          <p className="text-xs text-[#666666]">{data?.views}</p>
        </div>
        <div className="w-5 h-5 flex items-center whitespace-nowrap space-x-1">
          <img alt="eye" src={downloads} />
          <p className="text-xs text-[#666666]">{data?.downloads}</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-5 h-5 flex items-center space-x-1">
          <img alt="eye" src={time} />
          <p className="text-xs text-[#666666]">{calcDate(data?.published_date).result || 'Recent' }</p>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>

  )
}

export default LatestProjectCard
