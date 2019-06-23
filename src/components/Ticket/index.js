import React from "react";

import FlightDate from "../FlightDate";
import TransferIndicator from "../TransferIndicator";
import PriceButton from "../PriceButton";

import {carriers} from '../../tools';

import styles from './styles.module.scss';

function Ticket(props) {
	const {
		origin,
		origin_name,
		destination,
		destination_name,
		departure_date,
		departure_time,
		arrival_date,
		arrival_time,
		carrier,
		stops,
		price,
		priceCurrency,
		basePriceCurrency
	} = props;

	const flightFromParams = {
		direction: 'from',
		date: departure_date,
		time: departure_time,
		cityCode: origin,
		city: origin_name
	};

	const flightToParams = {
		direction: 'to',
		date: arrival_date,
		time: arrival_time,
		cityCode: destination,
		city: destination_name
	};

	const transferParams = {
		stopsCount: stops
	};

	const priceButtonParams = {
		currency: priceCurrency,
		baseAmount: price,
		baseCurrency: basePriceCurrency,
	};

	const carrierInfo = carriers.getCarrier(carrier);
	const carrierMarkup = !carrierInfo
		? null
		: <React.Fragment>
			<div className={styles["ticket__company-logo"]}>
				<a href={carrierInfo.site} target={"_blank"}>
					<img src={carrierInfo.logo} alt={carrierInfo.fullName} title={carrierInfo.fullName}/>
				</a>
			</div>
		</React.Fragment>;

	return (
		<div className={styles.ticket}>
			<div className={styles["ticket__action-wrapper"]}>
				<div className={styles["ticket__action-inner"]}>
					{carrierMarkup}

					<div className={styles["ticket__action-button"]}>
						<PriceButton {...priceButtonParams}/>
					</div>
				</div>
			</div>
			<div className={styles["ticket__info-wrapper"]}>
				<div className={styles["ticket__info-inner"]}>
					<div className={styles["ticket__flight-date"]}>
						<FlightDate {...flightFromParams} />
					</div>

					<div className={styles["ticket__transfer"]}>
						<TransferIndicator {...transferParams} />
					</div>

					<div className={styles["ticket__flight-date"]}>
						<FlightDate {...flightToParams} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ticket;
