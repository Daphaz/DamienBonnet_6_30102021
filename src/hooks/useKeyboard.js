import { useEffect, useState } from "react";

const useKeyboard = () => {
	const [key, setKey] = useState();

	const getKey = (e) => {
		switch (e.key) {
			case "ArrowRight":
				setKey("next");
				break;
			case "ArrowLeft":
				setKey("prev");
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		document.addEventListener("keyup", getKey);

		return () => document.removeEventListener("keyup", getKey);
	}, []);
	return {
		key,
		setKey,
	};
};

export default useKeyboard;
