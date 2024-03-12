import React from 'react'
import TopDeveloperCard from './TopDeveloperCard'
const TopDevelopers = () => {
    const developerCards = [];
    for (let i = 0; i < 4; i++) {
      developerCards.push(<TopDeveloperCard key={i} />);
    }
  return (
    <div className='p-2 space-y-3'>
        <div>
            <h1 className='text-lg font-medium text-[#333333]'>Top Developers</h1>
        </div>
        <div className='flex space-x-3 max-w-full overflow-auto '>
            {developerCards}
        </div>
     

    
    </div>
  )
}

export default TopDevelopers
