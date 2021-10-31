import { useEffect, useState } from "react";
import data from "../mock/data.json";

const useProfile = (id) => {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const userData = data.photographers.find((item) => item.id === id);
		setProfile(userData);
	}, [id]);

	return {
		profile,
	};
};

export default useProfile;
