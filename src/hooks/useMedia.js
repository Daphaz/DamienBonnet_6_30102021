import { useState, useEffect, useCallback } from "react";
import data from "../mock/datas.json";

const useMedia = (photographerId) => {
	const [photographerMedias, setPhotographerMedia] = useState(null);

	const fakeCallData = useCallback(() => {
		const medias = data.media.filter(
			(item) => item.photographerId === photographerId
		);

		return medias;
	}, [photographerId]);

	useEffect(() => {
		const mediaFiltered = fakeCallData();
		mediaFiltered.sort((a, b) => b.likes - a.likes);

		setPhotographerMedia(mediaFiltered);
	}, [fakeCallData]);

	const orderByPopularity = () => {
		const tempMedia = fakeCallData();
		tempMedia.sort((a, b) => b.likes - a.likes);
		setPhotographerMedia(tempMedia);
	};

	const orderByDate = () => {
		const tempMedia = fakeCallData();
		tempMedia.sort((a, b) => {
			const dateA = Date.parse(a.date);
			const dateB = Date.parse(b.date);

			return dateB - dateA;
		});
		setPhotographerMedia(tempMedia);
	};

	const orderByTitle = () => {
		const tempMedia = fakeCallData();
		tempMedia.sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});
		setPhotographerMedia(tempMedia);
	};

	const filterByTag = (tag) => {
		const str = tag.toLowerCase();
		const tempMedia = fakeCallData();
		const dataFiltered = tempMedia.filter((item) =>
			item.tags.some((val) => val === str)
		);
		setPhotographerMedia(dataFiltered);
	};

	const incrementLikeMedia = (mediaId) => {
		// const tempMedia = fakeCallData();
		// const originalNbLike = tempMedia.find(({ id }) => mediaId === id).likes;

		const dataFiltered = photographerMedias
			.map((item) => {
				if (item.id === mediaId) {
					return {
						...item,
						likes: item.likes + 1,
					};
				}
				return item;
			})
			.filter((val) => val);

		setPhotographerMedia(dataFiltered);
	};

	// const getTotalPrice = () => {
	// 	const totalLikes = photographerMedias.reduce((acc, item) => {
	// 		return acc + item.likes;
	// 	}, 0);

	// 	return totalLikes;
	// };

	return {
		photographerMedias,
		orderByPopularity,
		orderByDate,
		orderByTitle,
		filterByTag,
		incrementLikeMedia,
	};
};

export default useMedia;
