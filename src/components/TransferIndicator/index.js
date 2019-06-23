import React from "react";
import cn from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {utils} from '../../tools';

import styles from "./styles.module.scss";

const stopsEndings = ['пересадка', 'пересадки', 'пересадок'];

function TransferIndicator(props) {
	const {stopsCount = 0, direction = 'to'} = props;

	const stopsString = stopsCount
		? `${stopsCount} ${utils.getNounEnding(stopsCount, stopsEndings)}`
		: '';

	const decorClasses = cn([
		styles["transfer-indicator__decor"],
		direction === 'from' ? styles["transfer-indicator__decor--from"] : styles["transfer-indicator__decor--to"]
	]);

	return (
		<div className={styles["transfer-indicator"]}>
			<div className={styles["transfer-indicator__count"]}>{stopsString}</div>
			<div className={decorClasses}>
				<div className={styles["transfer-indicator__decor-icon"]}>
					<FontAwesomeIcon icon={['fas', 'plane']}/>
				</div>
			</div>
		</div>
	)
}

export default TransferIndicator;