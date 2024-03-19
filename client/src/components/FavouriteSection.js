import React, { useEffect, useState } from "react";

import axios from "axios";
import ProjectCardSecLoader from "./skelton/ProjectCardSecLoader";
import { useSelector } from "react-redux";
import EmptyCard from "./EmptyCard";
import { Link } from "react-router-dom";
import LatestProjectCard, { ProjectCardSecRemove } from "./LatestProjectCard";
import { noFavourite } from "../utils/constants";

const FavoriteSection = () => {
	const list = ["1", "2"];
	const [emptyData, setEmptyData] = useState(false);
	const [favoriteProjects, setFavoriteProjects] = useState([]);
	const favorites = useSelector((store) => store?.favorite?.favoriteProjects);
	useEffect(() => {
		setFavoriteProjects([]);
		async function call() {
			await axios.post("/getfavorite", { id: favorites }).then((res) => {
				if (res?.data.data.length === 0) {
					setEmptyData(true);
				} else {
					setFavoriteProjects(res?.data.data);
					setEmptyData(false);
				}
			});
		}
		call();
	}, [favorites]);

	const ProjectCardSecNew = ProjectCardSecRemove(LatestProjectCard);
	return (
		<div className="px-2 mt-16 md:mt-24 md:px-44">
			<div className="md:flex gap-2 hidden mb-5">
				<Link to={"/"} className="text-sm text-gray-400 md:text-base">
					Home
				</Link>
				<span className="text-sm text-gray-400 md:text-base">/</span>
				<span className="text-sm text-gray-400 md:text-base font-medium">Favorites</span>

			</div>
			{!emptyData && (
				<span className="font-medium md:text-lg">
					Projects ({favorites ? favorites.length : 0})
				</span>
			)}
			{emptyData && (
				<EmptyCard
					title={"No favorites"}
					img={noFavourite}
					des={
						"You have nothing on your list yet. Its never too late to change it"
					}
				/>
			)}
			<div className="mt-3 grid md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-2">
				{favoriteProjects.length === 0 &&
					!emptyData &&
					list?.map((item) => <ProjectCardSecLoader key={item} />)}
				{favoriteProjects &&
					favoriteProjects?.map((item, index) => (
						<ProjectCardSecNew data={item} />
					))}
			</div>
		</div>
	);
};

export default FavoriteSection;