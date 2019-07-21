import React, {useMemo} from "react";

import ToggleButton from "../ToggleButton";

import './styles.scss';

function Toolbar(props) {
	const {
		items = {}
	} = props;

	const preparedItems = useMemo(() => {
		const result = [];

		for (let itemName in items) {
			if (items.hasOwnProperty(itemName)) {
				const params = items[itemName];

				switch (itemName) {
					case 'nightModeToggle':
						result.push(
							<ToggleButton {...params}></ToggleButton>
						);
						break;
					default:
						console.error('Unknown toolbar\'s item')
				}
			}
		}

		return result;
	}, [items])

	return (
		<div className={"toolbar"}>
			{preparedItems.map((item, i) => {
				return <div className={"toolbar__item"} key={i}>
					{item}
				</div>
			})}
		</div>
	)
}

export default Toolbar;
