import LatestProjectCard from "../LatestProjectCard"
import TopNavigation from "../TopNavigation"

const Favorites = () => {
    return (
        <div>
            <TopNavigation title={'Favorites'} />
            <h1 className="p-2 font-medium text-[#333333]"> Projects(2)</h1>
            <div className='space-y-2 pt-3 px-2'>
                <LatestProjectCard />
                <LatestProjectCard />
    
            </div>
        </div>
      )
}

export default Favorites
