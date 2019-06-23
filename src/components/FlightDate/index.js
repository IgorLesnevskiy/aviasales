import React from "react";
import cn from "classnames";
import {utils} from '../../tools';
import styles from './styles.module.scss';

const fullDateFormat = 'DD MMM YYYY, dd';

function FlightDate(props) {
	const {time = '', direction = 'from', city = null, cityCode = null, date = ''} = props;

	const combinedCityCode = direction === 'from'
		? [cityCode, city].filter(Boolean).join(', ')
		: [city, cityCode].filter(Boolean).join(', ');

	const fdClasses = cn([
		styles["flight-date"],
		direction === 'from' ? styles["flight-date--from"] : styles["flight-date--to"]
	]);

	return (
		<div className={fdClasses}>
			<div className={styles["flight-date__time"]}>{time}</div>
			<div className={styles["flight-date__place"]}>{combinedCityCode}</div>
			<div className={styles["flight-date__date"]}>
				{utils.convertDate({
					date,
					formatString: fullDateFormat,
					locale: 'ru'
				})}
			</div>
		</div>
	)
}

export default FlightDate;
