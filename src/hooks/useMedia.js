import { useState, useEffect } from "react";
import data from "../mock/data.json";

const useMedia = (photographerId) => {
	const [media, setMedia] = useState(null);

	useEffect(() => {
		const mediaFiltered = data.media.filter(
			(item) => item.photographerId === photographerId
		);
		setMedia(mediaFiltered);
	}, [photographerId]);

	return {
		media,
	};
};

export default useMedia;
