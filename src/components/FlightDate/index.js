import React, {useEffect, useState} from "react";
import Skeleton  from "react-loading-skeleton";
import cn from "classnames";

import {utils} from '../../tools';

import "./styles.scss";

const fullDateFormat = 'DD MMM YYYY, dd';

function FlightDate(props) {
	const {
		time = '',
		direction = 'from',
		city = null,
		cityCode = null,
		date = '',
		isLoading = false,
	} = props;

	const combinedCityCode = direction === 'from'
		? [cityCode, city].filter(Boolean).join(', ')
		: [city, cityCode].filter(Boolean).join(', ');

	const fdClasses = cn([
		"flight-date",
		direction === 'from'
			? "flight-date--from"
			: "flight-date--to"
	]);

	const [convertedDate, updateDate] = useState();

	useEffect(() => {
		updateDate(utils.convertDate({
			date,
			formatString: fullDateFormat,
			locale: 'ru'
		}));
	}, [date]);

	return (
		<div className={fdClasses}>
			<div className={"flight-date__time"}>{!isLoading
				? time
				: <Skeleton count={1} width={80}/>
			}</div>
			<div className={"flight-date__place"}>{!isLoading
				? combinedCityCode
				: <Skeleton count={1} />
			}</div>
			<div className={"flight-date__date"}>
				{!isLoading && convertedDate
					? convertedDate
					: <Skeleton count={1} />
				}
			</div>
		</div>
	)
}

export default FlightDate;
