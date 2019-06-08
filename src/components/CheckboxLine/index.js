import React from "react";

import styles from './styles.module.scss';
import Checkbox from "../Checkbox";

class CheckboxLine extends React.Component {
	render() {
		return (
			//checkbox-line--simple
			<div className={styles["checkbox-line"]}>
				<div className={"checkbox-line__checkbox-wrapper"}>
					<Checkbox />
				</div>
			</div>
		)
	}
}

export default CheckboxLine;
