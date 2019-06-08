import React from "react";
import cn from "classnames";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TransferIndicator extends React.Component {
	render() {
		return (
			<div className={styles["transfer-indicator"]}>
				<div className={styles["transfer-indicator__count"]}>1 пересадка</div>

				<div className={cn([styles["transfer-indicator__decor"], styles["transfer-indicator__decor--to"]])}>
					<div className={styles["transfer-indicator__decor-icon"]}>
						<FontAwesomeIcon icon={['fas', 'plane']}/>
					</div>
				</div>

				<div className={cn([styles["transfer-indicator__decor"], styles["transfer-indicator__decor--from"]])}>
					<div className={styles["transfer-indicator__decor-icon"]}>
						<FontAwesomeIcon icon={['fas', 'plane']}/>
					</div>
				</div>

			</div>
		)
	}
}

export default TransferIndicator;