import React from "react";

import styles from './styles.module.scss';

class CurrencyViewer extends React.Component {
	render() {
		return (
			 <span className={styles["currency-viewer"]} data-type="RUB">21 032</span>
		)
	}
}

export default CurrencyViewer;
