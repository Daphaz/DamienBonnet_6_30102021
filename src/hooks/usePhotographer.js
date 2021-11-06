import { useState, useEffect } from "react";
import data from "../mock/datas.json";

const usePhotographer = () => {
	const [photographers, setPhotographers] = useState(null);

	useEffect(() => {
		setPhotographers(data.photographers);
	}, []);

	const filterByTag = (tag) => {
		const str = tag.toLowerCase();
		const dataFiltered = data.photographers.filter((item) =>
			item.tags.some((val) => val === str)
		);
		setPhotographers(dataFiltered);
	};

	return {
		photographers,
		filterByTag,
	};
};

export default usePhotographer;
