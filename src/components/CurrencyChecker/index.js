import React from "react";

import styles from './styles.module.scss';

class CurrencyChecker extends React.Component {
	render() {
		return (
			<div className={styles["currency-checker"]}>

				<input type="radio" value="RUB" name="currency" id="currency-1"
				       className={styles["currency-checker__input"]} defaultChecked={"true"}/>

				<label htmlFor="currency-1" className={styles["currency-checker__label"]}>RUB</label>
			</div>
		)
	}
}

export default CurrencyChecker;
