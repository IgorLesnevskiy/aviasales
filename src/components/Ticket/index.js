import React from "react";

import FlightDate from "../FlightDate";
import TransferIndicator from "../TransferIndicator";
import Button from "../Button";

import styles from './styles.module.scss';

import ta from "../../resources/images/companies/turkish-airlines.png";

class Ticket extends React.Component {
	render() {
		return (
			<div className={styles.ticket}>
				<div className={styles["ticket__action-wrapper"]}>
					<div className={styles["ticket__action-inner"]}>
						<div className={styles["ticket__company-logo"]}>
							<a href={"#"}>
								<img src={ta} />
							</a>
						</div>
						<div className={styles["ticket__action-button"]}>

							<Button/>

						</div>
					</div>
				</div>
				<div className={styles["ticket__info-wrapper"]}>
					<div className={styles["ticket__info-inner"]}>
						<div className={styles["ticket__flight-date"]}>
							<FlightDate direction = 'from' time = '11:45' city = 'Владивосток' cityCode = 'VVO' date = '12.05.18'/>
						</div>

						<div className={styles["ticket__transfer"]}>

							<TransferIndicator/>

						</div>

						<div className={styles["ticket__flight-date"]}>
							<FlightDate direction = 'to' time = '16:20' city = 'Тель-Авив' cityCode = 'TLV' date = '12.05.18'/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Ticket;
