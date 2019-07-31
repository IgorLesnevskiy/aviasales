import React, {useEffect, useLayoutEffect, useState} from "react";
import Ticket from "../Ticket";

import styles from './styles.module.scss';

const mockTicketsList = Array.from({length: 3}, (v, i) => {
	return {
		isMock: true,
	}
});

function TicketsList(props) {
	const {
		tickets = [],
		isLoading = false
	} = props;

	const [processedTicketsList, setProcessedTicketsList] = useState(mockTicketsList);

	useLayoutEffect(() => {
		setProcessedTicketsList(isLoading ? mockTicketsList : tickets);
	}, [isLoading, tickets]);

	return (
		<div className={styles["tickets-list"]}>
			{processedTicketsList.map((ticket, key) => {
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
