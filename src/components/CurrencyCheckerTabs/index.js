import React from "react";
import CurrencyChecker from "../CurrencyChecker";

import styles from './styles.module.scss';

class CurrencyCheckerTabs extends React.Component {
	render() {
		return (
			<div className={styles["currency-checker-tabs"]}>
				<div className={styles["currency-checker-tabs__item"]}>

					<CurrencyChecker />
					{/*<div className={"currency-checker"}>*/}
						{/*<input type="radio" value="RUB" name="currency" id="currency-1"*/}
						       {/*className={"currency-checker__input"} defaultChecked={"true"}/>*/}
						{/*<label htmlFor="currency-1" className={"currency-checker__label"}>RUB</label>*/}
					{/*</div>*/}

				</div>
				<div className={styles["currency-checker-tabs__item"]}>
					<CurrencyChecker />

					{/*<div className={"currency-checker"}>*/}
						{/*<input type="radio" value="USD" name="currency" id="currency-2"*/}
						       {/*className={"currency-checker__input"} />*/}
						{/*<label htmlFor="currency-2" className={"currency-checker__label"}>USD</label>*/}
					{/*</div>*/}

				</div>
				<div className={styles["currency-checker-tabs__item"]}>
					<CurrencyChecker />

					{/*<div className={"currency-checker"}>*/}
						{/*<input type="radio" value="EUR" name="currency" id="currency-3"*/}
						       {/*className={"currency-checker__input"}/>*/}
						{/*<label htmlFor="currency-3" className={"currency-checker__label"}>EUR</label>*/}
					{/*</div>*/}

				</div>
			</div>
		)
	}
}

export default CurrencyCheckerTabs;
