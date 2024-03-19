import FavoriteSection from "../FavouriteSection"
import LatestProjectCard from "../LatestProjectCard"
import TopNavigation from "../TopNavigation"

const Favorites = () => {
    return (
        <div>
            <TopNavigation title={'Favorites'} />
            <div className='space-y-2 -mt-10 px-2'>
                <FavoriteSection />
            </div>
        </div>
      )
}

export default Favorites
