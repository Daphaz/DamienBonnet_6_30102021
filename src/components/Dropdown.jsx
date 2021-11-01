import React, { useEffect, useState } from "react";

import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../assets/arrow-up.svg";

const sortItems = [
	{
		id: "drop-1",
		name: "Popularité",
		active: true,
	},
	{
		id: "drop-2",
		name: "Date",
		active: false,
	},
	{
		id: "drop-3",
		name: "Titre",
		active: false,
	},
];

const Dropdown = ({ orderByDate, orderByPopularity, orderByTitle }) => {
	const [open, setOpen] = useState(false);
	const [items, setItems] = useState(sortItems);
	const [current, setCurrent] = useState(null);

	useEffect(() => {
		const item = items.filter((val) => val.active);

		setCurrent(item[0]);
	}, [items]);

	const onClick = () => {
		setOpen(!open);
	};

	const handleChangeCurrent = (id, name) => {
		switch (name) {
			case "Popularité":
				orderByPopularity();
				break;
			case "Date":
				orderByDate();
				break;
			case "Titre":
				orderByTitle();
				break;

			default:
				break;
		}

		const itemsChanged = items.map((item) =>
			item.id === id ? { ...item, active: true } : { ...item, active: false }
		);
		setItems(itemsChanged);
		setOpen(false);
	};

	return (
		<div id="select-sort" className={`dropdown ${open ? "open" : ""}`}>
			<button
				onClick={onClick}
				type="button"
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-labelledby="label-select"
				className="dropdown__btn">
				<span className="dropdown__current">{current?.name}</span>
				<div aria-hidden className="dropdown__icon">
					{open ? <ArrowUp /> : <ArrowDown />}
				</div>
			</button>
			{open && (
				<ul className="dropdown__list">
					{items?.map(
						(item) =>
							!item.active && (
								<li
									tabIndex="0"
									key={item.id}
									className="dropdown__option"
									aria-label={`Trier par ${item.name}`}
									onClick={() => handleChangeCurrent(item.id, item.name)}>
									{item.name}
								</li>
							)
					)}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
