import React, {useEffect, useState} from "react";
import Skeleton  from "react-loading-skeleton";

import {carriers} from '../../tools';
import styles from './styles.module.scss';

function CarrierLogo(props) {
	const {
		carrier,
		isLoading
	} = props;

	const [carrierInfo, setCarrierInfo] = useState(null)

	useEffect(() => {
		setCarrierInfo(carriers.getCarrier(carrier));
	}, [carrier]);

	return (
		<div className={styles["carrier-logo"]}>
			{
				!isLoading && carrierInfo
					? <a href={carrierInfo.site} target={"_blank"} className={styles["carrier-logo__link"]}>
						<img
							src={carrierInfo.logo}
							className={styles["carrier-logo__image"]}
							alt={carrierInfo.fullName}
							title={carrierInfo.fullName}
						/>
					</a>
					: <Skeleton height={40} />
			}
		</div>
	)
}

export default CarrierLogo;
