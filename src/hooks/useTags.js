import data from "../mock/tags.json";

const useTags = () => {
	const tags = data.tags;
	return {
		tags,
	};
};

export default useTags;
