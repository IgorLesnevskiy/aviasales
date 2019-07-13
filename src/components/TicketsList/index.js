import React, {useEffect, useState} from "react";
import Ticket from "../Ticket";

import styles from './styles.module.scss';

function TicketsList(props) {
	const {
		tickets = [],
		isLoading = false
	} = props;
	//
	// const [isLoading, setLoadingStatus] = useState(true);
	//
	// useEffect(() => {
	// 	setLoadingStatus(false);
	// }, []);

	return (
		<div className={styles["tickets-list"]}>
			{tickets.map((ticket, key) => {
				return <React.Fragment key={key}>
					<div className={styles["tickets-list__item"]}>
						<Ticket {...ticket} isLoading={isLoading}/>
					</div>
				</React.Fragment>
			})}
		</div>
	)
}

export default TicketsList;
