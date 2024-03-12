import { Show, downloads, projectDemo, time } from "../utils/constants"


const LatestProjectCard = () => {
  return (
 <div className="flex w-full space-x-3 p-3 rounded-md border-primary- to-secondary-mainBorder border ">
  <div className="w-4/12 ">
    <img  className="rounded-md" src={projectDemo} alt="latest-project" />
  </div>

  <div className="w-6/12 ">
    <div className="space-y-2">
      <h1 className="text-xs text-teritary-main font-medium">REACT JS</h1>
      <p className="text-xs text-[#333333]">5 fastest runner in the world that change your mind</p>
      <p className="text-xs text-[#666666]">Akshay Sainy</p>
    </div>

    <div className="flex justify-between whitespace-nowrap items-center mt-1 w-full">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <img className="w-5 h-5" alt="eye" src={Show} />
          <p className="text-xs text-[#666666]">1.5 k</p>
        </div>
        <div className="w-5 h-5 flex items-center whitespace-nowrap space-x-1">
          <img alt="eye" src={downloads} />
          <p className="text-xs text-[#666666]">1.5 k</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-5 h-5 flex items-center space-x-1">
          <img alt="eye" src={time} />
          <p className="text-xs text-[#666666]">11 min</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default LatestProjectCard
