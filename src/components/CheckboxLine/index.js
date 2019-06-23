import React from "react";

import styles from './styles.scss';
import Checkbox from "../Checkbox";

function CheckboxLine(props) {
	const {
		only = true,
		id = null,
		label,
		isChecked = false,
		name,
		value,
		onChange = Function.prototype,
	} = props;

	const onlyTrigger = only
		? <div className={"checkbox-line__action-wrapper"}>
			<a href={"#"} className={"checkbox-line__action"}>Только</a>
		</div>
		: null;

	return (
		<div className={"checkbox-line"}>
			<div className={"checkbox-line__checkbox-wrapper"}>
				<Checkbox
					id = {id}
					label = {label}
					name = {name}
					value = {value}
					isChecked={isChecked}
					onChange = {onChange}
				/>
			</div>

			{onlyTrigger}
		</div>
	)
}

export default CheckboxLine;
