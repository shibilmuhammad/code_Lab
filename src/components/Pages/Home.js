import React from 'react'
import Header from '../Header'
import TopSearchBar from '../TopSearchBar'
import TopDevelopers from '../TopDevelopers'
import LatestProjects from '../LatestProjects'
import ProjectByDomain from '../ProjectByDomain'
import PopularProjects from '../PopularProjects'

const Home = () => {
  return (
    <div className='bg-primary-mainBg'>
        <Header />
        <TopSearchBar title={"Search Projects..."} />
        <TopDevelopers />
        <LatestProjects />
        <ProjectByDomain />
        <PopularProjects />

    </div>
  )
}

export default Home
