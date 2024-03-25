import React, { useEffect, useState } from 'react'
import Header from '../Header'
import TopSearchBar from '../TopSearchBar'
import TopDevelopers from '../TopDevelopers'
import LatestProjects from '../LatestProjects'
import ProjectByDomain from '../ProjectByDomain'
import PopularProjects from '../PopularProjects'
import { useDispatch } from "react-redux";

import { addCategory, addLatest, addPopular, addTopDevelopers } from '../../utils/ProjectSlice'
import axios from 'axios'
import BottomAddproject from '../BottomAddproject'
import ErrorPage from './ErrorPage'
const Home = () => {
  const dispatch = useDispatch();
  const[error,setError] = useState(null)
	useEffect(() => {
		async function call() {
			try{
				const list = await axios.get("/getlatest");
				dispatch(addLatest(list?.data));
				const topDevelopers = await axios.get("/getdevelopers");
				dispatch(addTopDevelopers(topDevelopers?.data));
				const popular = await axios.get("/getpopular");
				dispatch(addPopular(popular?.data));
				const {data} = await axios.get("/getallcategories");
				dispatch(addCategory(data));
			}catch(error){
				setError(error)
			}
	
		}
		call();
	}, []);
	if(error) return <ErrorPage err={error.message} />
  return (
    <div className='bg-primary-mainBg'>
        <Header />
        <TopSearchBar title={"Search Projects..."} />
        <TopDevelopers />
        <LatestProjects />
        <ProjectByDomain />
        <PopularProjects />
		<BottomAddproject/>

    </div>
  )
}

export default Home
