import React, {useState} from "react";
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

	return (
		<label className={"checkbox"}>
			<div className={"checkbox__box"}>
				<input type={"checkbox"}
				       id={uniqId}
				       name = {name}
				       value = {value}
				       onChange={onChange}
				       checked={isChecked}
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
