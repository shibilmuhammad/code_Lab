import React, { useEffect } from 'react'
import Header from '../Header'
import TopSearchBar from '../TopSearchBar'
import TopDevelopers from '../TopDevelopers'
import LatestProjects from '../LatestProjects'
import ProjectByDomain from '../ProjectByDomain'
import PopularProjects from '../PopularProjects'
import { useDispatch } from "react-redux";
import { addCategory, addLatest, addPopular, addTopDevelopers } from '../../utils/ProjectSlice'
import axios from 'axios'
const Home = () => {
  const dispatch = useDispatch();
	useEffect(() => {
		async function call() {
  
			const list = await axios.get("/getlatest");
			dispatch(addLatest(list?.data));
			// const topDevelopers = await axios.get("/getdevelopers");
			// dispatch(addTopDevelopers(topDevelopers?.data));
			const popular = await axios.get("/getpopular");
			dispatch(addPopular(popular?.data));
			// const categories = await axios.get("/getallcategories");
			// dispatch(addCategory(categories?.data));
		}
		call();
	}, []);
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
