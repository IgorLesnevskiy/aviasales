import React from "react";
import Ticket from "../Ticket";

import styles from './styles.module.scss';

class TicketsList extends React.Component {
	render() {
		return (
			<div className={styles["tickets-list"]}>
				<div className={styles["tickets-list__item"]}>
					<Ticket/>
				</div>

				<div className={styles["tickets-list__item"]}>
					<Ticket/>
				</div>

				<div className={styles["tickets-list__item"]}>
					<Ticket/>
				</div>
			</div>
		)
	}
}

export default TicketsList;
