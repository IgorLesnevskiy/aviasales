import React from "react";

import cn from "classnames";
import styles from './styles.module.scss';

class FlightDate extends React.Component {
	render() {
		return (
			//flight-date--to
			<div className={cn([styles["flight-date"], styles["flight-date--from"]])}>
				<div className={styles["flight-date__time"]}>11:45</div>
				<div className={styles["flight-date__place"]}>Тель-Авив, TLV</div>
				<div className={styles["flight-date__date"]}>10 окт 2018, Пт</div>
			</div>
		)
	}
}

export default FlightDate;
