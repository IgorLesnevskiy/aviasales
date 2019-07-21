import React, {useState, useCallback} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {utils} from "../../tools";

import './styles.scss';

function ToggleButton(props) {
	const {
		id = null,
		name,
		value,
		isChecked = false,
		onChange = Function.prototype,
		turnedOnIconClass = null,
		turnedOffIconClass = null,
	} = props;

	const [uniqId] = useState(id || utils.getUniqueId(), [id]);
	const [checkboxValue, setChecked] = useState(isChecked);

	const handleInputChange = useCallback(
		(event) => {
			setChecked(event.target.checked);
			onChange(event);
		},
		[onChange],
	);

	const turnedOnIcon = turnedOnIconClass
		? <FontAwesomeIcon icon={['fas', turnedOnIconClass]}/>
		: null;

	const turnedOffIcon = turnedOffIconClass
		? <FontAwesomeIcon icon={['fas', turnedOffIconClass]}/>
		: null;

	return (
		<label className={"toggle-button"}>
			<input className={"toggle-button__checkbox"}
		        type={"checkbox"}
				id={uniqId}
				name = {name}
				value = {value}
				onChange={handleInputChange}
				checked={checkboxValue}
			/>
			<div className={"toggle-button__indicator-wrapper"}>
				<div className={"toggle-button__indicator"}>
					{checkboxValue
						? <div className={"toggle-button__indicator-icon"}>{turnedOnIcon}</div>
						: <div className={"toggle-button__indicator-icon"}>{turnedOffIcon}</div>
					}
				</div>
			</div>
		</label>
	)
}

export default ToggleButton;
