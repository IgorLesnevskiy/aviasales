import React from "react";
import Ticket from "../Ticket";

import styles from './styles.module.scss';

function TicketsList(props) {
	const {
		tickets = []
	} = props;

	return (
		<div className={styles["tickets-list"]}>
			{tickets.map((ticket, key) => {
				return <React.Fragment key={key}>
					<div className={styles["tickets-list__item"]}>
						<Ticket {...ticket}/>
					</div>
				</React.Fragment>
			})}
		</div>
	)
}

export default TicketsList;
