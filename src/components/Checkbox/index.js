import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.scss';

class Checkbox extends React.Component {
	render() {
		return (
			<label className={styles.checkbox}>
				<div className={styles["checkbox__box"]}>
					<input type={"checkbox"} id={"checkbox-1"} />
					<FontAwesomeIcon icon={['fas', 'check']} className={styles["checkbox__tick"]}/>
				</div>
				<div className={styles["checkbox__label"]}>Все</div>
			</label>
		)
	}
}

export default Checkbox;
