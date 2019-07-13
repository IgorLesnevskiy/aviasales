import React from "react";

import FlightDate from "../FlightDate";
import TransferIndicator from "../TransferIndicator";
import PriceButton from "../PriceButton";
import CarrierLogo from "../CarrierLogo";

import './styles.scss';

function Ticket(props) {
	const {
		isLoading = false,
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
		city: origin_name,
		isLoading
	};

	const flightToParams = {
		direction: 'to',
		date: arrival_date,
		time: arrival_time,
		cityCode: destination,
		city: destination_name,
		isLoading
	};

	const transferParams = {
		stopsCount: stops,
		isLoading
	};

	const priceButtonParams = {
		currency: priceCurrency,
		baseAmount: price,
		baseCurrency: basePriceCurrency,
		isLoading
	};

	const carrierLogoParams = {
		carrier,
		isLoading
	};

	return (
		<div className={"ticket"}>
			<div className={"ticket__action-wrapper"}>
				<div className={"ticket__action-inner"}>
					<div className={"ticket__company-logo"}>
						<CarrierLogo {...carrierLogoParams}/>
					</div>

					<div className={"ticket__action-button"}>
						 <PriceButton {...priceButtonParams}/>
					</div>
				</div>
			</div>
			<div className={"ticket__info-wrapper"}>
				<div className={"ticket__info-inner"}>
					<div className={"ticket__flight-date"}>
						<FlightDate {...flightFromParams} />
					</div>

					<div className={"ticket__transfer"}>
						<TransferIndicator {...transferParams} />
					</div>

					<div className={"ticket__flight-date"}>
						<FlightDate {...flightToParams} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ticket;
