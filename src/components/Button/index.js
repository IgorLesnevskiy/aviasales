import React from "react";

import styles from './styles.module.scss';

import CurrencyViewer from '../CurrencyViewer';

class Button extends React.Component {
	render() {
		return (
			<a href={"#"} className={styles["button"]}>
				<div className={styles["button__text"]}>

					Купить за <CurrencyViewer />

				</div>
			</a>
		)
	}
}

export default Button;
