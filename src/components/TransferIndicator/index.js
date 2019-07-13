import React, {useEffect, useState} from "react";
import Skeleton  from "react-loading-skeleton";
import cn from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {utils} from '../../tools';

import styles from "./styles.module.scss";

const stopsEndings = ['пересадка', 'пересадки', 'пересадок'];

function TransferIndicator(props) {
	const {
		stopsCount = 0,
		direction = 'to',
		isLoading
	} = props;

	const [formattedStopsCount, updateStopsCount] = useState("");

	useEffect(() => {
		if (stopsCount) {
			updateStopsCount(`${stopsCount} ${utils.getNounEnding(stopsCount, stopsEndings)}`)
		}
	}, [stopsCount]);

	const decorClasses = cn([
		styles["transfer-indicator__decor"],
		direction === 'from'
			? styles["transfer-indicator__decor--from"]
			: styles["transfer-indicator__decor--to"]
	]);

	return (
		<div className={styles["transfer-indicator"]}>
			{
				stopsCount !== 0
					? <div className={styles["transfer-indicator__count"]}>
						{!isLoading && formattedStopsCount ? formattedStopsCount : <Skeleton count={1} />}
					</div>
					: null
			}
			<div className={decorClasses}>
				<div className={styles["transfer-indicator__decor-icon"]}>
					<FontAwesomeIcon icon={['fas', 'plane']}/>
				</div>
			</div>
		</div>
	)
}

export default TransferIndicator;