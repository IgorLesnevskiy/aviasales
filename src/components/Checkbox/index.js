import React, {useCallback, useState} from "react";
import {utils} from '../../tools';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

function Checkbox(props) {
	const {
		id = null,
		label,
		name,
		value,
		isChecked = false,
		onChange = Function.prototype
	} = props;

	const [uniqId] = useState(id || utils.getUniqueId());
	const [checkboxValue, setChecked] = useState(isChecked);

	const handleInputChange = useCallback(
		(event) => {
			setChecked(event.target.checked);
			onChange(event);
		},
		[onChange],
	);

	return (
		<label className={"checkbox"}>
			<div className={"checkbox__box"}>
				<input type={"checkbox"}
				       id={uniqId}
				       name = {name}
				       value = {value}
				       onChange={handleInputChange}
				       checked={checkboxValue}
				/>
				<FontAwesomeIcon icon={['fas', 'check']} className={"checkbox__tick"}/>
			</div>
			{label
				? <div className={"checkbox__label"}>{label}</div>
				: null
			}
		</label>
	)
}

export default Checkbox;
